import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./homePenjual.css";

import megaphone from '../../assets/img/megaphone.png';


export const HomePenjual = () => {
    return(
        <>
            <div className="homePenjual">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="text">
                            <span>Halo Dream Creations,</span> yuk jual tiket konsermu sekarang!
                        </div>

                        <div className="box-continer">
                            <div className="box box-1">
                                <h1 className="title-box">Jual Tiket Konser</h1>
                                <p>Anda bisa menjual berbagai tiket konser musik yang ada di wilayah Yogyakarta. Pastikan untuk membaca panduan terlebih dahulu di sini.</p>
                                <img src={megaphone} alt="" className="icon"/>
                                <button type="button" className="btn btn-konser" onClick={() => navigate('../halamanKonser')}>Beli Tiket</button>
                            </div>
                            <div className="box box-2">
                                <h1 className="title-box">Jual Tiket Konser</h1>
                                <p>Anda bisa menjual berbagai tiket konser musik yang ada di wilayah Yogyakarta. Pastikan untuk membaca panduan terlebih dahulu di sini.</p>
                                <img src={megaphone} alt="" className="icon"/>
                                <button type="button" className="btn btn-konser" onClick={() => navigate('../halamanKonser')}>Beli Tiket</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}