import React from "react";
import { useNavigate } from "react-router-dom";
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
import sampulKonser from '../../assets/img/sheilaon7.jpeg';


export const Jelajah = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="jelajah">

                {/* Navbar */}
                {/* <nav class="navbar navbar-expand-lg bg-dar">
                    <div class="container-fluid mx-5">
                        <a class="navbar-brand" href="#">concerto.</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <form class="search d-flex" role="search">
                                    <div class="input-group flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping">
                                            <img className="search-icon" alt="Search fill" src={searchImg} />
                                        </span>
                                        <input type="search" class="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                                    </div>
                                </form>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">
                                        <img className="menu-icon" alt="menu-icon" src={compassImg} />
                                        Jelajah
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" onClick={() => navigate('#')}>
                                        <img className="groub-icon" alt="menu-icon" src={groubAddImg} />
                                        Cari Teman
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#" onClick={() => navigate('#')}>
                                        <img className="menu-icon" alt="menu-icon" src={basketImg} />
                                        Keranjang
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="profile">
                            <a class="nav-link mx-0" aria-current="page" href="#">
                                <img className="menu-profile" alt="menu-icon" src={profileImg} />
                            </a>
                        </div>
                    </div>
                </nav> */}


                {/* Navigasi */}
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Jelajah</div>

                        {/* Filter */}
                        <div className="filter">
                            <div className="overlap-filter">
                                <img className="icon-filter" alt="Pin fill" src={filterPinImg} />
                                <div className="text-filter">Lokasi</div>
                                <img className="vector" alt="Vector" src={vectorImg} />
                            </div>
                            <div className="overlap-filter">
                                <img className="icon-filter" alt="Date range fill" src={filterDateRangeImg} />
                                <div className="text-filter">Tanggal</div>
                                <img className="vector" alt="Vector" src={vectorImg} />
                            </div>
                            <div className="overlap-filter">
                                <img className="icon-filter" alt="Wallet fill" src={walletImg} />
                                <div className="text-filter">Harga</div>
                                <img className="vector" alt="Vector" src={vectorImg} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Result */}
                <div className="search-result">
                    <div className="container-fluid mx-5">
                        <div className="konser-search-result">
                            {[...Array(12)].map((_, index) => {
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
                                                <div className="harga-konser">Rp 250.000</div>
                                                <button type="button" className="btn btn-konser" onClick={() => navigate('../halamanKonser')}>Beli Tiket</button>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* footer */}
                {/* <div className="footer">
                    <div className="container-fluid mx-5">
                        <div className="overlap-footer">
                            <div className="description">
                                <a class="footer-brand" href="#">concerto.</a>
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
                                        <div class="input mb-3">
                                            <input type="text" class="form-control text-form" placeholder="Masukkan alamat email Anda..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                                            <button class="ikuti-sekarang" type="button" id="button-addon2">Ikuti Sekarang</button>
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
                </div> */}



                {/* <Konser
                    className="konser-1"
                    dateRangeFill="../../assets/img/date-range-fill-13.svg"
                    pinFill="../../assets/img/pin-fill-13.svg"
                    property1="default"
                    sampul="../../assets/img/sampul-22.png"
                /> */}
                {/* <PropertyDefaultWrapper
                    className="konser-2"
                    dateRangeFill="date-range-fill-14.svg"
                    pinFill="pin-fill-14.svg"
                    property1="default"
                    sampul="sampul-23.png"
                /> */}
                {/* <Konser3
                    className="konser-instance"
                    dateRangeFill="date-range-fill-15.svg"
                    pinFill="pin-fill-15.svg"
                    property1="default"
                    sampul="sampul-24.png"
                />
                <Konser4
                    className="konser-4-instance"
                    dateRangeFill="date-range-fill-16.svg"
                    pinFill="pin-fill-16.svg"
                    property1="default"
                    sampul="sampul-25.png"
                />
                <Konser6
                    className="konser-6-instance"
                    dateRangeFill="date-range-fill-17.svg"
                    pinFill="pin-fill-17.svg"
                    property1="default"
                    sampul="sampul-26.png"
                />
                <Konser7
                    className="konser-7-instance"
                    dateRangeFill="date-range-fill-18.svg"
                    pinFill="pin-fill-18.svg"
                    property1="default"
                    sampul="sampul-27.png"
                />
                <Konser8
                    className="konser-8-instance"
                    dateRangeFill="date-range-fill-19.svg"
                    pinFill="pin-fill-19.svg"
                    property1="default"
                    sampul="sampul-28.png"
                />
                <Konser9
                    className="konser-9-instance"
                    dateRangeFill="date-range-fill-20.svg"
                    pinFill="pin-fill-20.svg"
                    property1="default"
                    sampul="sampul-29.png"
                />
                <Konser9
                    className="design-component-instance-node"
                    dateRangeFill="date-range-fill-21.svg"
                    pinFill="pin-fill-21.svg"
                    property1="default"
                    sampul="sampul-30.png"
                />
                <Konser10
                    className="konser-10-instance"
                    dateRangeFill="date-range-fill-22.svg"
                    pinFill="pin-fill-22.svg"
                    property1="default"
                    sampul="sampul-31.png"
                />
                <Konser11
                    className="konser-11-instance"
                    dateRangeFill="date-range-fill-23.svg"
                    pinFill="pin-fill-23.svg"
                    property1="default"
                    sampul="sampul-32.png"
                />
                <Konser12
                    className="konser-12-instance"
                    dateRangeFill="date-range-fill-24.svg"
                    pinFill="pin-fill-24.svg"
                    property1="default"
                    sampul="sampul-33.png"
                /> */}
                {/* </div> */}
            </div>

        </>
    );
};
