// client/src/pages/cariTeman/cariTeman.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./cariTeman.css";

import btnTemanImg from '../../assets/img/User_alt_fill_black.svg';
import profileTeman from '../../assets/img/user1.jpeg';
import groubAddImg from '../../assets/img/group_add_fil.svg';

const CariTeman = () => {
    const [users, setUsers] = useState([]);
    const [concerts, setConcerts] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [selectedConcert, setSelectedConcert] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/alldata', { withCredentials: true });

                setUsers(response.data.users);
                setConcerts(response.data.concerts);
                setTransactions(response.data.transactions);
                setFilteredUsers(response.data.users);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleConcertFilter = (event) => {
        const concertName = event.target.value;
        setSelectedConcert(concertName);

        if (concertName === "") {
            setFilteredUsers(users);
        } else {
            const filtered = transactions
                .filter(transaction => transaction.concert_name === concertName)
                .map(transaction => users.find(user => user.id === transaction.user_id));

            setFilteredUsers(filtered);
        }
    };

    return (
        <div className="cariteman">
            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="navigasi">Home / Cari Teman</div>
                    <div className="wrapper-navigasi-teman">
                        <div className="filter">
                            <select className="overlap-filter2" value={selectedConcert} onChange={handleConcertFilter}>
                                <option value="">Semua Konser</option>
                                {concerts.map(concert => (
                                    <option key={concert.id} value={concert.name}>{concert.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="button-teman">
                            Teman
                            <img src={btnTemanImg} alt="button-teman" className="button-teman-img" />
                        </div>
                    </div>

                    <div className="list-teman">
                        {filteredUsers.map(user => (
                            <div key={user.id} className="box-teman" onClick={() => navigate(`/chat/${user.id}`)}>
                                <img src={profileTeman} alt="" className="profile-teman" />
                                <div className="box-detail-teman">
                                    <div className="wrapper-username">
                                        <h4 className="username-teman">{user.full_name}</h4>
                                        <h4 className="minat-teman">Music Enthusiast</h4>
                                    </div>
                                    <img src={groubAddImg} alt="" className="btn-add-teman" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CariTeman;
