import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./login.css";

import hideImg from "../../assets/img/View_hide_fill.png"

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3000/login', 
                { email, password },
                { withCredentials: true }
            );
            //console.log(response.data); // Debug response data
            if (response.data.msg === "Login Berhasil") {
                sessionStorage.setItem('userId', response.data.userId);
                sessionStorage.setItem('full_name', response.data.full_name);
                sessionStorage.setItem('email', response.data.email);
                sessionStorage.setItem('role', response.data.role);
                console.log('Session Storage:', sessionStorage); // Debug session storage

                // Redirect berdasarkan role
                if (response.data.role === 1) { // 1 untuk buyer
                    navigate('/home');
                } else if (response.data.role === 2) { // 2 untuk seller
                    navigate('/homePenjual');
                }
            } else {
                alert(response.data.msg);
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <>
            <div className="p-login">
                <div className="overlap-wrapper">
                    <div className="overlap">
                        <div className="rectangle"></div>
                        <div className="div"></div>
                        <div className="text-wrapper">Masuk</div>
                        <div className="group">
                            <div className="overlap-group">
                                <input 
                                    type="email" 
                                    className="input-field" 
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="overlap-group-wrapper">
                            <div className="overlap-group">
                                <input 
                                    type="password" 
                                    className="input-field" 
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <img className="view-hide-fill" src={hideImg} alt="hide" />
                            </div>
                        </div>
                        <button className="frame" onClick={handleLogin}>
                            <div className="text-wrapper-4" >Masuk</div>
                        </button>
                        <button className="div-wrapper" onClick={() => navigate('../daftar')}>
                            <div className="text-wrapper-4" >Daftar</div>
                        </button>
                        <div className="text-wrapper-6">Lupa password</div>
                        <div className="text-wrapper-7">concerto.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
