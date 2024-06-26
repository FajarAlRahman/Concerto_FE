import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./landing.css";

// import banner1 from '../../assets/img/banner1.png';
import compassImg from '../../assets/img/Compass_fill.svg';
import searchImg from '../../assets/img/Search.svg';
import groubAddImg from '../../assets/img/group_add_fil.svg';
import basketImg from '../../assets/img/Basket_alt_3_fill.svg';
import linkedInImg from '../../assets/img/linkedin.svg';
import twitterImg from '../../assets/img/twitter.svg';
import facebookImg from '../../assets/img/facebook.svg';

import pinImg from '../../assets/img/Pin_fill_konser.svg';
import dateRangeImg from '../../assets/img/Date_range_fill_konser.svg';
import sampulKonser from '../../assets/img/sheilaon7.jpeg';
import person1 from '../../assets/img/person1.png';
import person2 from '../../assets/img/person2.png';
import profileTestimoni from '../../assets/img/profileTestimoni.jpg';


import banner1 from '../../assets/img/spotlight-1.png';
import banner2 from '../../assets/img/spotlight-2.png';
import banner3 from '../../assets/img/spotlight-3.png';
import banner4 from '../../assets/img/spotlight-4.png';
import banner5 from '../../assets/img/spotlight-5.png';
import banner6 from '../../assets/img/spotlight-6.png';


export const Landing = () => {
    const [rating, setRating] = useState(5);

    useEffect(() => {
        const konserListHorizontals = document.querySelectorAll('.konser-list-horizontal');

        konserListHorizontals.forEach(konserListHorizontal => {
            konserListHorizontal.addEventListener('wheel', function (e) {
                if (e.deltaY !== 0) {
                    e.preventDefault();
                    if (e.deltaY > 0) {
                        konserListHorizontal.scrollLeft += 50;
                    } else {
                        konserListHorizontal.scrollLeft -= 50;
                    }
                }
            }, { passive: false });
        });

        return () => {
            konserListHorizontals.forEach(konserListHorizontal => {
                konserListHorizontal.removeEventListener('wheel', function (e) {
                    if (e.deltaY !== 0) {
                        e.preventDefault();
                        if (e.deltaY > 0) {
                            konserListHorizontal.scrollLeft += 50;
                        } else {
                            konserListHorizontal.scrollLeft -= 50;
                        }
                    }
                });
            });
        };
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className="landing">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg bg-dar">
                    <div className="container-fluid mx-5">
                        <a className="navbar-brand" href="#">concerto.</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <form className="search d-flex" role="search">
                                    <div className="input-group flex-nowrap">
                                        <span className="input-group-text" id="addon-wrapping">
                                            <img className="search-icon" alt="Search fill" src={searchImg} />
                                        </span>
                                        <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                                    </div>
                                </form>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={() => navigate('../jelajah')}>
                                        <img className="menu-icon" alt="menu-icon" src={compassImg} />
                                        Jelajah
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={() => navigate('#')}>
                                        <img className="groub-icon" alt="menu-icon" src={groubAddImg} />
                                        Cari Teman
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#" onClick={() => navigate('#')}>
                                        <img className="menu-icon" alt="menu-icon" src={basketImg} />
                                        Keranjang
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-login" onClick={() => navigate('../login')}>Masuk</button>
                    </div>
                </nav>


                {/* Spotlight */}
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

                {/* Content Rekomendasi */}
                <div className="rekomendasi">
                    <div className="container-fluid mx-5">
                        <div className="label">Rekomendasi Konser
                            <a className="lihat-semua" href="">Lihat Semua</a>
                        </div>
                        <div className="konser-list-horizontal">
                            {[...Array(12)].map(() => {
                                return (
                                    <>
                                        <div className="konser">
                                            <img className="sampul" src={sampulKonser} alt="" />
                                            <div className="label-konser">Sheila On 7</div>
                                            <div className="tanggal-konser">
                                                <img className="icon-konser" alt="Date range fill" src={dateRangeImg} />
                                                04 September 2024
                                            </div>
                                            <div className="lokasi-konser">
                                                <img className="icon-konser" alt="Pin fill" src={pinImg} />
                                                Sahid Raya Hotel & Convention Yogyakarta
                                            </div>
                                            <div className="footer-konser">
                                                <div className="footer-wrapper">
                                                    <div className="harga-konser">Rp 250.000</div>
                                                    <button type="button" className="btn btn-konser" onClick={() => navigate('../halamanKonser')}>Beli Tiket</button>
                                                </div>
                                            </div>

                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Content Konser Terbaru */}
                <section className="konser-terbaru">
                    <div className="container-fluid mx-5">
                        <div className="label">Konser Terbaru
                            <a className="lihat-semua" href="">Lihat Semua</a>
                        </div>
                        <div className="konser-list-horizontal">
                            {[...Array(12)].map(() => {
                                return (
                                    <>
                                        <div className="konser">
                                            <img className="sampul" src={sampulKonser} alt="" />
                                            <div className="label-konser">Sheila On 7</div>
                                            <div className="tanggal-konser">
                                                <img className="icon-konser" alt="Date range fill" src={dateRangeImg} />
                                                04 September 2024
                                            </div>
                                            <div className="lokasi-konser">
                                                <img className="icon-konser" alt="Pin fill" src={pinImg} />
                                                Sahid Raya Hotel & Convention Yogyakarta
                                            </div>
                                            <div className="footer-konser">
                                                <div className="footer-wrapper">
                                                    <div className="harga-konser">Rp 250.000</div>
                                                    <button type="button" className="btn btn-konser" onClick={() => navigate('../halamanKonser')}>Beli Tiket</button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Buat Konser */}
                <section className="buat-konser">
                    {/* <div className="container-fluid mx-5"> */}
                    <div className="left-section">
                        <img className="person1-buat-konser" src={person1} alt="person1" />
                        <img className="person2-buat-konser" src={person2} alt="person2" />
                    </div>
                    <div className="right-section">
                        <div className="label">Buat Acara Anda sendiri</div>
                        <p className="text-buat-konser">Daftarkan acara Anda gratis di sini dan nikmati keuntungannya</p>
                        <button type="button" className="btn btn-buat-konser"  onClick={() => navigate('../loginPenjual')}>Buat Konser</button>
                    </div>
                    {/* </div> */}
                </section>

                {/* Testimoni */}
                <section className="testimoni">
                    <div className="container-fluid mx-5">
                        {[...Array(3)].map(() => {
                            return (
                                <>
                                    <div className="box-testimoni">
                                        <div className="header-testimoni">
                                            <img className="profile-testimoni" src={profileTestimoni} alt="profileTestimoni" />
                                            <div className="right-header-testimoni">
                                                <div className="username-testimoni">Fadil Toriq</div>
                                                <div className="rating-testimoni">
                                                    {[...Array(5)].map((star, index) => {
                                                        const currentRating = index + 1;

                                                        return (
                                                            <label >
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
                                </>
                            );
                        })}
                    </div>
                </section>

                {/* footer */}
                <footer className="footer">
                    <div className="container-fluid mx-5">
                        <div className="overlap-footer">
                            <div className="description">
                                <a className="footer-brand" href="#">concerto.</a>
                                <p className="text-description">concerto adalah platform layanan penjualan tiket konser musik
                                    yang memungkinkan siapa saja membuat, berbagi, menemukan, dan menghadiri acara yang
                                    mengobarkan semangat dan memperkaya kehidupan mereka.</p>
                                <div className="social-media">
                                    <img className="icon-social-media" src={facebookImg} alt="facebook Img" />
                                    <img className="icon-social-media" src={twitterImg} alt="twitter Img" />
                                    <img className="icon-social-media" src={linkedInImg} alt="linkedIn Img" />
                                </div>
                            </div>

                            <div className="my-account">
                                <h1 className="concerto-1">
                                    concerto
                                    <span className="titik">.</span>
                                </h1>
                                <p className="tentang-kami-hubungi">
                                    Tentang kami&nbsp;&nbsp;
                                    <br />
                                    Hubungi kami <br />
                                    Bagaimana itu bekerja <br />
                                    Ketentuan
                                </p>
                            </div>

                            <div className="stay-in-the-loop">
                                <div className="title-text-stay">Dapatkan Informasi Terbaru</div>
                                <p className="text-stay">
                                    Bergabunglah dengan email kami untuk terus mengikuti perkembangan terbaru kami untuk Acara dan konser
                                    musik
                                </p>

                                <div className="field-email">
                                    <form action="">
                                        <div className="input mb-3">
                                            <input type="text" className="form-control text-form" placeholder="Masukkan alamat email Anda..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button className="ikuti-sekarang" type="button" id="button-addon2">Ikuti Sekarang</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-line" ></div>
                        <div className="copyright">
                            <p className="copyright-text">Copyright © 2024 Garuda Akasha</p>
                        </div>
                    </div>
                </footer>
            </div >
        </>
    );
}