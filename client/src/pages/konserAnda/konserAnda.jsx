import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import { BsEmojiFrown, BsSearch } from "react-icons/bs";
import axios from 'axios';
import "./konserAnda.css";

import pinImg from '../../assets/img/Pin_fill_konser.svg';
import dateRangeImg from '../../assets/img/Date_range_fill_konser.svg';

const loadConcertImage = (imageUrl) => {
    return `/assets/img/${imageUrl}`;
};

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
};

const ConcertList = ({ concerts }) => {
    return (
        <div className="list-konser-anda">
            {concerts.length > 0 ? concerts.map((concert) => (
                <div className="konser" key={concert.id}>
                    <img className="sampul" src={loadConcertImage(concert.image_url)} alt={concert.name} />
                    <div className="label-konser">{concert.name}</div>
                    <div className="tanggal-konser">
                        <img className="icon-konser" alt="Date range fill" src={dateRangeImg} />
                        {formatDate(concert.date)}
                    </div>
                    <div className="lokasi-konser">
                        <img className="icon-konser" alt="Pin fill" src={pinImg} />
                        {concert.venue}
                    </div>
                </div>
            )) : (
                <div className="nothing">
                    <BsEmojiFrown className="icon-nothing" />
                    <p>
                        Tidak ada konser saat ini.
                        Klik Buat Konser untuk menjual tiket konser Anda
                    </p>
                </div>
            )}
        </div>
    );
};

const AllConcerts = ({ concerts }) => {
    const navigate = useNavigate();
    return (
        <div className="box-content-menu">
            <h1 className="header-menu">Semua Konser</h1>
            <div className="tool-menu">
                <button type="button" className="btn btn-menu-buat-konser" onClick={() => navigate('../buatKonserPenjual')}>Buat Konser</button>
                <form className="search d-flex" role="search">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <BsSearch className="search-icon" />
                        </span>
                        <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                    </div>
                </form>
            </div>
            <ConcertList concerts={concerts} />
        </div>
    );
};

const PublishedConcerts = ({ concerts }) => {
    const navigate = useNavigate();
    const today = new Date();
    const publishedConcerts = concerts.filter(concert => new Date(concert.date) >= today);

    return (
        <div className="box-content-menu">
            <h1 className="header-menu">Tayang</h1>
            <div className="tool-menu">
                <button type="button" className="btn btn-menu-buat-konser" onClick={() => navigate('../buatKonserPenjual')}>Buat Konser</button>
                <form className="search d-flex" role="search">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <BsSearch className="search-icon" />
                        </span>
                        <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                    </div>
                </form>
            </div>
            <ConcertList concerts={publishedConcerts} />
        </div>
    );
};

const EndedConcerts = ({ concerts }) => {
    const navigate = useNavigate();
    const today = new Date();
    const endedConcerts = concerts.filter(concert => new Date(concert.date) < today);

    return (
        <div className="box-content-menu">
            <h1 className="header-menu">Berakhir</h1>
            <div className="tool-menu">
                <button type="button" className="btn btn-menu-buat-konser" onClick={() => navigate('../buatKonserPenjual')}>Buat Konser</button>
                <form className="search d-flex" role="search">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">
                            <BsSearch className="search-icon" />
                        </span>
                        <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                    </div>
                </form>
            </div>
            <ConcertList concerts={endedConcerts} />
        </div>
    );
};

export const KonserAnda = () => {
    const [currentView, setCurrentView] = useState('allConcerts');
    const [concerts, setConcerts] = useState([]);

    useEffect(() => {
        const fetchConcerts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/seller/concerts', { withCredentials: true });
                setConcerts(response.data);
            } catch (error) {
                console.error('Error fetching concerts', error);
            }
        };
        fetchConcerts();
    }, []);

    const renderContent = () => {
        switch (currentView) {
            case 'allConcerts':
                return <AllConcerts concerts={concerts} />;
            case 'published':
                return <PublishedConcerts concerts={concerts} />;
            case 'ended':
                return <EndedConcerts concerts={concerts} />;
            default:
                return null;
        }
    };

    return (
        <div className="konserAnda">
            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="navigasi">Home / Konser Anda</div>
                    <h1 className="header">Konser Anda</h1>
                    <div className="content-konserAnda">
                        <div className="box-nav">
                            <ul className="list-menu-konserAnda">
                                <li
                                    className={`menu-konserAnda ${currentView === 'allConcerts' ? 'active' : ''}`}
                                    onClick={() => setCurrentView('allConcerts')}
                                >
                                    Semua Konser
                                    <CgChevronRight className="icon-arrow" />
                                </li>
                                <li
                                    className={`menu-konserAnda ${currentView === 'published' ? 'active' : ''}`}
                                    onClick={() => setCurrentView('published')}
                                >
                                    Tayang
                                    <CgChevronRight className="icon-arrow" />
                                </li>
                                <li
                                    className={`menu-konserAnda ${currentView === 'ended' ? 'active' : ''}`}
                                    onClick={() => setCurrentView('ended')}
                                >
                                    Berakhir
                                    <CgChevronRight className="icon-arrow" />
                                </li>
                            </ul>
                        </div>
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};
