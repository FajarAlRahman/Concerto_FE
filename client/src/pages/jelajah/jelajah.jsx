import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./jelajah.css";

import compassImg from '../../assets/img/Compass_fill.svg';
import searchImg from '../../assets/img/Search.svg';
import groubAddImg from '../../assets/img/group_add_fil.svg';
import basketImg from '../../assets/img/Basket_alt_3_fill.svg';
import profileImg from '../../assets/img/profile.jpeg';
import filterPinImg from '../../assets/img/Pin_fill.svg';
import vectorImg from '../../assets/img/Vector.svg';
import filterDateRangeImg from '../../assets/img/Date_range_fill.svg';
import walletImg from '../../assets/img/Wallet_fill.svg';
import linkedInImg from '../../assets/img/linkedin.svg';
import twitterImg from '../../assets/img/twitter.svg';
import facebookImg from '../../assets/img/facebook.svg';

import pinImg from '../../assets/img/Pin_fill_konser.svg';
import dateRangeImg from '../../assets/img/Date_range_fill_konser.svg';

export const Jelajah = () => {
    const navigate = useNavigate();
    const [concerts, setConcerts] = useState([]);
    const [filteredConcerts, setFilteredConcerts] = useState([]);
    const [venues, setVenues] = useState([]);
    const [filters, setFilters] = useState({
        venue: '',
        dateRange: '',
        priceRange: ''
    });

    useEffect(() => {
        fetchConcerts();
    }, []);

    useEffect(() => {
        filterConcerts();
    }, [filters, concerts]);

    const fetchConcerts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/concerts', { withCredentials: true });
            setConcerts(response.data);
            extractVenues(response.data);
        } catch (error) {
            console.error('Error fetching concerts', error);
        }
    };

    const extractVenues = (concerts) => {
        const uniqueVenues = [...new Set(concerts.map(concert => concert.venue))];
        setVenues(uniqueVenues);
    };

    const filterConcerts = () => {
        let tempConcerts = concerts;

        if (filters.venue) {
            tempConcerts = tempConcerts.filter(concert => concert.venue === filters.venue);
        }

        if (filters.dateRange) {
            const now = new Date();
            if (filters.dateRange === "week") {
                tempConcerts = tempConcerts.filter(concert => {
                    const concertDate = new Date(concert.date);
                    return isSameWeek(now, concertDate);
                });
            } else if (filters.dateRange === "month") {
                tempConcerts = tempConcerts.filter(concert => {
                    const concertDate = new Date(concert.date);
                    return concertDate.getMonth() === now.getMonth() && concertDate.getFullYear() === now.getFullYear();
                });
            } else if (filters.dateRange === "year") {
                tempConcerts = tempConcerts.filter(concert => {
                    const concertDate = new Date(concert.date);
                    return concertDate.getFullYear() === now.getFullYear();
                });
            }
        }

        if (filters.priceRange) {
            if (filters.priceRange === "<500000") {
                tempConcerts = tempConcerts.filter(concert => concert.max_price < 500000);
            } else if (filters.priceRange === "500000-1000000") {
                tempConcerts = tempConcerts.filter(concert => concert.max_price >= 500000 && concert.max_price <= 1000000);
            } else if (filters.priceRange === "1000001-2000000") {
                tempConcerts = tempConcerts.filter(concert => concert.max_price >= 1000001 && concert.max_price <= 2000000);
            } else if (filters.priceRange === ">2000000") {
                tempConcerts = tempConcerts.filter(concert => concert.max_price > 2000000);
            }
        }

        setFilteredConcerts(tempConcerts);
    };

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    const isSameWeek = (date1, date2) => {
        const startOfWeek = (date) => {
            const diff = date.getDate() - date.getDay();
            return new Date(date.setDate(diff));
        };

        const weekStart1 = startOfWeek(new Date(date1));
        const weekStart2 = startOfWeek(new Date(date2));

        return weekStart1.getTime() === weekStart2.getTime();
    };

    return (
        <div className="jelajah">
            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="navigasi">Home / Jelajah</div>

                    <div className="filter">
                        <div className="overlap-filter">
                            <img className="icon-filter" alt="Pin fill" src={filterPinImg} />
                            <select name="venue" onChange={handleFilterChange}>
                                <option value="">Lokasi</option>
                                {venues.map((venue, index) => (
                                    <option key={index} value={venue}>{venue}</option>
                                ))}
                            </select>
                            <img className="vector" alt="Vector" src={vectorImg} />
                        </div>
                        <div className="overlap-filter">
                            <img className="icon-filter" alt="Date range fill" src={filterDateRangeImg} />
                            <select name="dateRange" onChange={handleFilterChange}>
                                <option value="">Tanggal</option>
                                <option value="week">Minggu ini</option>
                                <option value="month">Bulan ini</option>
                                <option value="year">Tahun ini</option>
                            </select>
                            <img className="vector" alt="Vector" src={vectorImg} />
                        </div>
                        <div className="overlap-filter">
                            <img className="icon-filter" alt="Wallet fill" src={walletImg} />
                            <select name="priceRange" onChange={handleFilterChange}>
                                <option value="">Harga</option>
                                <option value="<500000"> &lt; Rp. 500.000</option>
                                <option value="500000-1000000">Rp. 500.000 - Rp. 1.000.000</option>
                                <option value="1000001-2000000">Rp. 1.000.001 - Rp. 2.000.000</option>
                                <option value=">2000000"> &gt; Rp. 2.000.000</option>
                            </select>
                            <img className="vector" alt="Vector" src={vectorImg} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="search-result">
                <div className="container-fluid mx-5">
                    <div className="konser-search-result">
                        {filteredConcerts.map((concert, index) => (
                            <div key={index} className="konser">
                                <img className="sampul" src={`/assets/img/${concert.image_url}`} alt={concert.name} />
                                <div className="label-konser">{concert.name}</div>
                                <div className="tanggal-konser">
                                    <img className="icon-konser" alt="Date range fill" src={dateRangeImg} />
                                    {new Date(concert.date).toLocaleDateString()}
                                </div>
                                <div className="lokasi-konser">
                                    <img className="icon-konser" alt="Pin fill" src={pinImg} />
                                    {concert.venue}
                                </div>
                                <div className="footer-konser">
                                    <div className="footer-wrapper">
                                        <div className="harga-konser">Rp {concert.max_price ? concert.max_price.toLocaleString() : "N/A"}</div>
                                        <button type="button" className="btn btn-konser" onClick={() => navigate(`../halamanKonser/${concert.id}`)}>Beli Tiket</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
