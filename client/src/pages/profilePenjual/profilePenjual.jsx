import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { CgChevronRight } from "react-icons/cg";
import "./profilePenjual.css";

import profileUser from "../../assets/img/profile.jpeg";
import iconEditProfile from "../../assets/img/Edit_fill.svg";

export const ProfilePenjual = () => {
    const [currentView, setCurrentView] = useState('accountSettings');
    const [profile, setProfile] = useState({});
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:3000/profile', { withCredentials: true });
            setProfile(response.data);
        } catch (error) {
            console.error('Error fetching profile', error);
        }
    };

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/profile', profile, { withCredentials: true });
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    const handleSubmitPassword = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            alert('Password baru dan konfirmasi password tidak cocok');
            return;
        }

        try {
            await axios.post('http://localhost:3000/change-password', { currentPassword, newPassword }, { withCredentials: true });
            alert('Password updated successfully');
            // Reset password fields after successful update
            setCurrentPassword('');
            setNewPassword('');
            setConfirmNewPassword('');
        } catch (error) {
            console.error('Error updating password', error);
        }
    };

    const handlePasswordChange = (e) => {
        const { id, value } = e.target;
        if (id === 'currentPassword') {
            setCurrentPassword(value);
        } else if (id === 'newPassword') {
            setNewPassword(value);
        } else if (id === 'confirmNewPassword') {
            setConfirmNewPassword(value);
        }
    };

    const renderContent = () => {
        switch (currentView) {
            case 'accountSettings':
                return (
                    <div className="box-right">
                        <h1 className="text-pengaturan">Pengaturan Akun</h1>
                        <form className="form-profile" onSubmit={handleSubmit}>
                            <div className="form-item">
                                <label htmlFor="full_name" className="form-label">Nama Penyelenggara</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="full_name"
                                    value={profile.full_name || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="bio" className="form-label">Info</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bio"
                                    value={profile.bio || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="full_name" className="form-label">Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="full_name"
                                    value={profile.full_name || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="jabatan" className="form-label">Jabatan</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="jabatan"
                                    value="Penjual"
                                    readOnly
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="province" className="form-label">Provinsi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="province"
                                    value={profile.province || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="city" className="form-label">Kabupaten/Kota</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    value={profile.city || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={profile.email || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="phone_number" className="form-label">No WhatsApp</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone_number"
                                    value={profile.phone_number || ''}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-btn">
                                <button type="submit" className="btn btn-simpan">Simpan</button>
                            </div>
                        </form>
                    </div>
                );
            case 'passwordSettings':
                return (
                    <div className="box-right">
                        <h1 className="text-pengaturan">Atur Password</h1>
                        <form className="form-profile" onSubmit={handleSubmitPassword}>
                            <div className="form-item">
                                <label htmlFor="currentPassword" className="form-label">Masukkan Password Lama</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="currentPassword"
                                    value={currentPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Password Sekarang"
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="newPassword" className="form-label">Masukkan Password Baru</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Password Baru"
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="confirmNewPassword" className="form-label">Konfirmasi Password Baru</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmNewPassword"
                                    value={confirmNewPassword}
                                    onChange={handlePasswordChange}
                                    placeholder="Konfirmasi Password Baru"
                                />
                            </div>
                            <div className="form-btn">
                                <button type="submit" className="btn btn-simpan">Perbarui Password</button>
                            </div>
                        </form>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="profilePenjual">
            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="box-left">
                        <img src={profileUser} alt="" className="profile-img" />
                        <div className="btn-edit-profile">
                            <img src={iconEditProfile} alt="" className="icon-edit-profile" />
                        </div>
                        <div className="line" />
                        <ul className="list-menu-akun">
                            <li className="menu-akun" onClick={() => setCurrentView('accountSettings')}>
                                Pengaturan Akun
                                <CgChevronRight className="icon-arrow" />
                            </li>
                            <li className="menu-akun" onClick={() => setCurrentView('passwordSettings')}>
                                Atur Password
                                <CgChevronRight className="icon-arrow" />
                            </li>
                            <li className="menu-akun" onClick={() => navigate('../')}>
                                Keluar
                                <CgChevronRight className="icon-arrow" />
                            </li>
                        </ul>
                    </div>
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default ProfilePenjual;
