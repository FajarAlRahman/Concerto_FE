import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homePenjual.css";

import megaphoneImg from '../../assets/img/megaphone.png';
import chartImg from '../../assets/img/chart.png';


export const HomePenjual = () => {
    const navigate = useNavigate();

    return(
        <>
            <div className="homePenjual">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="content-main">
                        <div className="text">
                            <span>Halo Dream Creations,</span> yuk jual tiket konsermu sekarang!
                        </div>

                        <div className="box-continer">
                            <div className="box box-1">
                                <h1 className="title-box">Jual Tiket Konser</h1>
                                <p>Anda bisa menjual berbagai tiket konser musik yang ada di wilayah Yogyakarta. Pastikan untuk membaca panduan terlebih dahulu 
                                    <a href="#"> di sini.</a>
                                </p>
                                <img src={megaphoneImg} alt="icon-main-penjual" className="icon-main-penjual"/>
                                <button type="button" className="btn btn-main-penjual" onClick={() => navigate('../buatKonserPenjual')}>Buat Konser</button>
                            </div>
                            <div className="box box-1">
                                <h1 className="title-box">Lihat Pendapatan Anda</h1>
                                <p>Anda bisa melihat jumlah pendapatan yang Anda dapatkan dalam kurun waktu tertentu. Pastikan untuk membaca panduan terlebih dahulu
                                    <a href="#"> di sini.</a>
                                </p>
                                <img src={chartImg} alt="icon-main-penjual" className="icon-main-penjual"/>
                                <button type="button" className="btn btn-main-penjual" onClick={() => navigate('#')}>Pendapatan</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}