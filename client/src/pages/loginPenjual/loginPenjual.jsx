import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./loginPenjual.css";

import hideImg from "../../assets/img/View_hide_fill.png"


export const LoginPenjual = () => {

    const navigate = useNavigate();

    return (
        <>
            <div class="loginPenjual">
                <div class="overlap-wrapper">
                    <div class="overlap">
                        <div class="rectangle"></div>
                        <div class="div"></div>
                        <div class="text-wrapper">Masuk</div>
                        <div class="group">
                            <div class="overlap-group">
                                <input type="email" class="input-field" placeholder="Email" />
                            </div>
                        </div>
                        <div class="overlap-group-wrapper">
                            <div class="overlap-group">
                                <input type="password" class="input-field" placeholder="Password" />
                                <img class="view-hide-fill" src={hideImg} />
                            </div>
                        </div>
                        <button class="btn-login" onClick={() => navigate('../homePenjual')}>
                            <div class="text-wrapper-4" >Masuk Sebagai Penjual</div>
                        </button>
                        <a class="text-wrapper-5" onClick={() => navigate('../login')}>Masuk sebagai pengguna</a>
                        <a class="text-wrapper-6">Lupa password</a>
                        <div class="text-wrapper-7">concerto.</div>
                        <div className="pendaftaran">
                            Belum punya akun?
                            <a class="link-pendaftaran" onClick={() => navigate('../daftarPenjual')}>Daftar Sekarang</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}