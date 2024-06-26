import React, { useState } from "react";
import { CgChevronRight } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import "./pendapatan.css";
import commercialImg from "../../assets/img/commercial.png";
import cashImg from "../../assets/img/cash.png";
import ticketImg from "../../assets/img/ticket.png";

export const Pendapatan = () => {
    const [activeMenu, setActiveMenu] = useState("Pendapatan");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <div className="pendapatan">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Konser Anda</div>
                        <h1 className="header">Lihat Pendapatan Anda</h1>
                        <div className="content-pendapatan">
                            <div className="box-nav">
                                <ul className="list-menu-pendapatan">
                                    <li
                                        className={`menu-pendapatan ${activeMenu === "Pendapatan" ? "active" : ""}`}
                                        onClick={() => handleMenuClick("Pendapatan")}
                                    >
                                        Pendapatan
                                        <CgChevronRight className="icon-arrow" />
                                    </li>
                                    <li
                                        className={`menu-pendapatan ${activeMenu === "Pelanggan" ? "active" : ""}`}
                                        onClick={() => handleMenuClick("Pelanggan")}
                                    >
                                        Pelanggan
                                        <CgChevronRight className="icon-arrow" />
                                    </li>
                                    <li
                                        className={`menu-pendapatan ${activeMenu === "Laporan Penjualan" ? "active" : ""}`}
                                        onClick={() => handleMenuClick("Laporan Penjualan")}
                                    >
                                        Laporan Penjualan
                                        <CgChevronRight className="icon-arrow" />
                                    </li>
                                    <li
                                        className={`menu-pendapatan ${activeMenu === "Rekapitulasi" ? "active" : ""}`}
                                        onClick={() => handleMenuClick("Rekapitulasi")}
                                    >
                                        Rekapitulasi
                                        <CgChevronRight className="icon-arrow" />
                                    </li>
                                </ul>
                            </div>

                            {activeMenu === "Pendapatan" && (
                                <div className="box-content-menu">
                                    <h1 className="header-menu">Pendapatan</h1>
                                    <div className="tool-menu">
                                        <div className="box-tool">
                                            <img src={commercialImg} alt="commercialImg" className="icon-tool" />
                                            <div className="detail-tool">
                                                <h3>Konser ditayangkan</h3>
                                                <h5>1 Konser</h5>
                                            </div>
                                        </div>
                                        <div className="box-tool">
                                            <img src={cashImg} alt="commercialImg" className="icon-tool" />
                                            <div className="detail-tool">
                                                <h3>Konser ditayangkan</h3>
                                                <h5>1 Konser</h5>
                                            </div>
                                        </div>
                                        <div className="box-tool">
                                            <img src={ticketImg} alt="commercialImg" className="icon-tool" />
                                            <div className="detail-tool">
                                                <h3>Konser ditayangkan</h3>
                                                <h5>1 Konser</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-menu-pendapatan">
                                        {/* grafik penjualan */}
                                        <h5>Grafik Penjualan</h5>
                                    </div>
                                </div>
                            )}

                            {activeMenu === "Pelanggan" && (
                                <div className="box-content-menu">
                                    <h1 className="header-menu">Pelanggan</h1>
                                    <div className="tool-menu">
                                        {/* <button type="button" className="btn btn-menu-buat-konser" onClick={() => navigate('../buatKonserPenjual')}>Buat Konser</button> */}
                                        <form className="search d-flex" role="search">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text" id="addon-wrapping">
                                                    <BsSearch className="search-icon" />
                                                </span>
                                                <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="content-menu-pendapatan">
                                        {/* Tabel Pelangg */}
                                        <h5>Tabel Pelanggan</h5>
                                    </div>
                                </div>
                            )}

                            {activeMenu === "Laporan Penjualan" && (
                                <div className="box-content-menu">
                                    <h1 className="header-menu">Laporan Penjualan</h1>
                                    <div className="tool-menu">
                                        {/* <button type="button" className="btn btn-menu-buat-konser" onClick={() => navigate('../buatKonserPenjual')}>Buat Konser</button> */}
                                        <form className="search d-flex" role="search">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text" id="addon-wrapping">
                                                    <BsSearch className="search-icon" />
                                                </span>
                                                <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="content-menu-pendapatan">
                                        {/* Tabel Laporan Penjualan*/}
                                        <h5>Tabel Laporan Penjualan</h5>
                                    </div>
                                </div>
                            )}

                            {activeMenu === "Rekapitulasi" && (
                                <div className="box-content-menu">
                                    <h1 className="header-menu">Laporan Rekapitulasi</h1>
                                    <div className="tool-menu">
                                        {/* <button type="button" className="btn btn-menu-buat-konser" onClick={() => navigate('../buatKonserPenjual')}>Buat Konser</button> */}
                                        <form className="search d-flex" role="search">
                                            <div className="input-group flex-nowrap">
                                                <span className="input-group-text" id="addon-wrapping">
                                                    <BsSearch className="search-icon" />
                                                </span>
                                                <input type="search" className="form-control" placeholder="Cari Konser" aria-label="search" aria-describedby="addon-wrapping" />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="content-menu-pendapatan">
                                        {/* Tabel Rekapitulasi */}
                                        <h5>Tabel Rekapitulasi</h5>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
