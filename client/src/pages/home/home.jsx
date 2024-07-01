import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import "./home.css";

import banner1 from '../../assets/img/spotlight-1.png';
import banner2 from '../../assets/img/spotlight-2.png';
import banner3 from '../../assets/img/spotlight-3.png';
import banner4 from '../../assets/img/spotlight-4.png';
import banner5 from '../../assets/img/spotlight-5.png';
import banner6 from '../../assets/img/spotlight-6.png';

import pinImg from '../../assets/img/Pin_fill_konser.svg';
import dateRangeImg from '../../assets/img/Date_range_fill_konser.svg';
import person1 from '../../assets/img/person1.png';
import person2 from '../../assets/img/person2.png';
import profileTestimoni from '../../assets/img/profileTestimoni.jpg';

const Home = () => {
    const [rating, setRating] = useState(5);
    const [concerts, setConcerts] = useState([]);
    const [recommendedConcerts, setRecommendedConcerts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const konserListHorizontals = document.querySelectorAll('.konser-list-horizontal');

        const handleWheelEvent = (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                if (e.deltaY > 0) {
                    e.currentTarget.scrollLeft += 50;
                } else {
                    e.currentTarget.scrollLeft -= 50;
                }
            }
        };

        konserListHorizontals.forEach(konserListHorizontal => {
            konserListHorizontal.addEventListener('wheel', handleWheelEvent, { passive: false });
        });

        const fetchConcerts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/concerts', { withCredentials: true });
                setConcerts(response.data);
            } catch (error) {
                console.error('Error fetching concerts', error);
            }
        };

        const fetchRecommendedConcerts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/concerts/recommended', { withCredentials: true });
                setRecommendedConcerts(response.data);
            } catch (error) {
                console.error('Error fetching recommended concerts', error);
            }
        };

        fetchConcerts();
        fetchRecommendedConcerts();

        return () => {
            konserListHorizontals.forEach(konserListHorizontal => {
                konserListHorizontal.removeEventListener('wheel', handleWheelEvent);
            });
        };
    }, []);

    const loadConcertImage = (imageUrl) => {
        return `/assets/img/${imageUrl}`;
    };

    return (
        <div className="home">
            <div className="spotlight">
                {/* <div className="container-fluid mx-5"> */}
                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>

                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="1000">
                                <img src={banner1} className="img-banner d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={banner2} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={banner3} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={banner4} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={banner5} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={banner6} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                {/* </div> */}
            </div>

            <div className="rekomendasi">
                <div className="container-fluid mx-5">
                    <div className="label">Rekomendasi Konser
                        <a className="lihat-semua" href="">Lihat Semua</a>
                    </div>
                    <div className="konser-list-horizontal">
                        {recommendedConcerts.length > 0 ? recommendedConcerts.map((concert, index) => (
                            <div key={index} className="konser">
                                <img className="sampul" src={loadConcertImage(concert.image_url)} alt={concert.name} />
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
                        )) : <p>Loading...</p>}
                    </div>
                </div>
            </div>

            <section className="konser-terbaru">
                <div className="container-fluid mx-5">
                    <div className="label">Konser Terbaru
                        <a className="lihat-semua" href="">Lihat Semua</a>
                    </div>
                    <div className="konser-list-horizontal">
                        {concerts.length > 0 ? concerts.map((concert, index) => (
                            <div key={index} className="konser">
                                <img className="sampul" src={loadConcertImage(concert.image_url)} alt={concert.name} />
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
                        )) : <p>Loading...</p>}
                    </div>
                </div>
            </section>

            <section className="buat-konser">
                <div className="left-section">
                    <img className="person1-buat-konser" src={person1} alt="person1" />
                    <img className="person2-buat-konser" src={person2} alt="person2" />
                </div>
                <div className="right-section">
                    <div className="label">Buat Acara Anda sendiri</div>
                    <p className="text-buat-konser">Daftarkan acara Anda gratis di sini dan nikmati keuntungannya</p>
                    <button type="button" className="btn btn-buat-konser">Buat Konser</button>
                </div>
            </section>

            <section className="testimoni">
                <div className="container-fluid mx-5">
                    {[...Array(3)].map((_, index) => {
                        return (
                            <div key={index} className="box-testimoni">
                                <div className="header-testimoni">
                                    <img className="profile-testimoni" src={profileTestimoni} alt="profileTestimoni" />
                                    <div className="right-header-testimoni">
                                        <div className="username-testimoni">Fadil Toriq</div>
                                        <div className="rating-testimoni">
                                            {[...Array(5)].map((star, starIndex) => {
                                                const currentRating = starIndex + 1;

                                                return (
                                                    <label key={starIndex}>
                                                        <input className="input-star" type="radio" name="rating" value={currentRating} />
                                                        <FaStar className="rating-star" size={50} color={currentRating <= (rating) ? "#ffc107" : "#e4e5e9"} />
                                                    </label>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-testimoni">
                                    Websitenya bagus, jadi gak perlu bingung mau beli tiket konser. Rekomen banget buat orang mau nyari tiket konser musik, lumayan lengkap juga.
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Home;
