import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import Multiselect from 'multiselect-react-dropdown';
import "./profilePenjual.css";

import profileUser from "../../assets/img/profile.jpeg";
import iconEditProfile from "../../assets/img/Edit_fill.svg";


export const ProfilePenjual = () => {
    const [currentView, setCurrentView] = useState('accountSettings'); // default view
    const navigate = useNavigate();

  

    const renderContent = () => {
        switch (currentView) {
            case 'accountSettings':
                return (
                    <div className="box-right">
                        <h1 className="text-pengaturan">Pengaturan Akun</h1>
                        <form className="form-profile" action="" method="">
                            <div className="form-item">
                                <label htmlFor="namaPenyelenggara" className="form-label">Nama Penyelenggara</label>
                                <input type="text" className="form-control" id="namaPenyelenggara" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="info" className="form-label">info</label>
                                <input type="text" className="form-control" id="info" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                                <input type="text" className="form-control" id="namaLengkap" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="jabatan" className="form-label">Jabatan</label>
                                <input type="text" className="form-control" id="jabatan" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="provinsi-penjual" className="form-label">Provinsi</label>
                                <input type="text" className="form-control" id="provinsi-penjual" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="kab-kota-penjual" className="form-label">Kabupaten/Kota</label>
                                <input type="text" className="form-control" id="kab-kota-penjual" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="kecamatan-penjual" className="form-label">Kecamatan</label>
                                <input type="text" className="form-control" id="kecamatan-penjual" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="alamat-penjual" className="form-label">Alamat Lengkap</label>
                                <input type="text" className="form-control" id="alamat-penjual" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="email-penjua" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email-penjua" placeholder="" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="noWa" className="form-label">No WhatsApp</label>
                                <input type="text" className="form-control" id="noWa" placeholder="" />
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
                        <form className="form-profile" action="" method="">
                            <div className="form-item">
                                <label htmlFor="currentPassword" className="form-label">Masukkan Password Lama</label>
                                <input type="password" className="form-control" id="currentPassword" placeholder="Password Sekarang" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="newPassword" className="form-label">Masukkan Password Baru</label>
                                <input type="password" className="form-control" id="newPassword" placeholder="Password Baru" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="confirmNewPassword" className="form-label">Konfirmasi Password Baru</label>
                                <input type="password" className="form-control" id="confirmNewPassword" placeholder="Konfirmasi Password Baru" />
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
}
