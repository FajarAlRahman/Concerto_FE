import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./teman.css";

import profileTeman from '../../assets/img/user1.jpeg';
import chatIcon from '../../assets/img/comment_duotone_line.svg';

export const Teman = () => {
    const navigate = useNavigate();
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const fetchFriends = async () => {
            try {
                const response = await axios.get('http://localhost:3000/friends', { withCredentials: true });
                setFriends(response.data);
            } catch (error) {
                console.error("Error fetching friends:", error);
            }
        };

        fetchFriends();
    }, []);

    return (
        <>
            <div className="teman">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Cari Teman / Teman</div>
                        <div className="list-teman">
                            {friends.map((friend) => (
                                <div key={friend.id} className="box-teman">
                                    <img src={profileTeman} alt="" className="profile-teman" />
                                    <div className="box-detail-teman">
                                        <div className="wrapper-username">
                                            <h4 className="username-teman">{friend.full_name}</h4>
                                            <h4 className="minat-teman">Music Enthusiast</h4> {/* Replace with a relevant field if available */}
                                        </div>
                                        <button className="btn-chat" onClick={() => navigate(`../chat/${friend.id}`)}>
                                            <img src={chatIcon} alt="" className="btn-add-chat" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Teman;
