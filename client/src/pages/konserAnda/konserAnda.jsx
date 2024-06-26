import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import { BsBoxArrowUpRight, BsEmojiFrown, BsFillPencilFill, BsFillTrash3Fill, BsSearch } from "react-icons/bs";
import "./konserAnda.css";

import pinImg from '../../assets/img/Pin_fill_konser.svg';
import dateRangeImg from '../../assets/img/Date_range_fill_konser.svg';
import sampulKonser from '../../assets/img/sheilaon7.jpeg';

const AllConcerts = () => {
    const navigate = useNavigate();
    const concerts = [...Array(10)]; // Change this array length to 0 to simulate no concerts

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
            <div className="list-konser-anda">
                {concerts.length > 0 ? concerts.map((_, index) => (
                    <div className="konser" key={index}>
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
                        <div className="jumlah-terjual">
                            <span>1</span>Tiket Terjual
                        </div>
                        <div className="footer-konser">
                            <button type="button" className="btn btn-konser">
                                <BsFillPencilFill className="icon-konser" />
                            </button>
                            <button type="button" className="btn btn-konser">
                                <BsBoxArrowUpRight className="icon-konser" />
                            </button>
                        </div>
                    </div>
                )) : (
                    <div className="nothing">
                        <BsEmojiFrown className="icon-nothing" />
                        <p>
                            Tidak ada konser saat ini.
                            Klik Buat Konser untuk membuat menjual tiket konser Anda
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Drafts = () => {
    const navigate = useNavigate();
    const concerts = [...Array(0)]; // Change this array length to 0 to simulate no concerts

    return (
        <div className="box-content-menu">
            <h1 className="header-menu">Draf</h1>
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
            <div className="list-konser-anda">
                {concerts.length > 0 ? concerts.map((_, index) => (
                    <div className="konser" key={index}>
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
                        <div className="jumlah-terjual">
                            <span>1</span>Tiket Terjual
                        </div>
                        <div className="footer-konser">
                            <button type="button" className="btn btn-konser">
                                <BsFillPencilFill className="icon-konser" />
                            </button>
                            <button type="button" className="btn btn-konser">
                                <BsFillTrash3Fill className="icon-konser" />
                            </button>
                        </div>
                    </div>
                )) : (
                    <div className="nothing">
                        <BsEmojiFrown className="icon-nothing" />
                        <p>
                            Tidak ada konser saat ini.
                            Klik Buat Konser untuk membuat menjual tiket konser Anda
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Published = () => {
    const navigate = useNavigate();
    const concerts = [...Array(5)]; // Change this array length to 0 to simulate no concerts

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
            <div className="list-konser-anda">
                {concerts.length > 0 ? concerts.map((_, index) => (
                    <div className="konser" key={index}>
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
                        <div className="jumlah-terjual">
                            <span>1</span>Tiket Terjual
                        </div>
                        <div className="footer-konser">
                            <button type="button" className="btn btn-konser">
                                <BsFillPencilFill className="icon-konser" />
                            </button>
                            <button type="button" className="btn btn-konser">
                                <BsFillTrash3Fill className="icon-konser" />
                            </button>
                        </div>
                    </div>
                )) : (
                    <div className="nothing">
                        <BsEmojiFrown className="icon-nothing" />
                        <p>
                            Tidak ada konser saat ini.
                            Klik Buat Konser untuk membuat menjual tiket konser Anda
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Ended = () => {
    const navigate = useNavigate();
    const concerts = [...Array(3)]; // Change this array length to 0 to simulate no concerts

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
            <div className="list-konser-anda">
                {concerts.length > 0 ? concerts.map((_, index) => (
                    <div className="konser" key={index}>
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
                        <div className="jumlah-terjual">
                            <span>1</span>Tiket Terjual
                        </div>
                        <div className="footer-konser berakhir">
                            <p>Berakhir pada Senin, 2 April 2024</p>
                            <div className="warpper-footer">
                                <button type="button" className="btn btn-konser">
                                    <BsFillPencilFill className="icon-konser" />
                                </button>
                                <button type="button" className="btn btn-konser">
                                    <BsFillTrash3Fill className="icon-konser" />
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="nothing">
                        <BsEmojiFrown className="icon-nothing" />
                        <p>
                            Tidak ada konser saat ini.
                            Klik Buat Konser untuk membuat menjual tiket konser Anda
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export const KonserAnda = () => {
    const [currentView, setCurrentView] = useState('allConcerts');

    const renderContent = () => {
        switch (currentView) {
            case 'allConcerts':
                return <AllConcerts />;
            case 'drafts':
                return <Drafts />;
            case 'published':
                return <Published />;
            case 'ended':
                return <Ended />;
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
                                    className={`menu-konserAnda ${currentView === 'drafts' ? 'active' : ''}`}
                                    onClick={() => setCurrentView('drafts')}
                                >
                                    Draf
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
