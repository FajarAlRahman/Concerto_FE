import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgChevronRight } from "react-icons/cg";
import Multiselect from 'multiselect-react-dropdown';
import "./profile.css";

import profileUser from "../../assets/img/profile.jpeg";
import iconEditProfile from "../../assets/img/Edit_fill.svg";
import iconArrow from "../../assets/img/Expand_right.svg";

const favouriteOptions = [
    { name: 'Pop', id: 1 },
    { name: 'Rock', id: 2 },
    { name: 'Jazz', id: 3 },
    { name: 'Classical', id: 4 },
    { name: 'Hip Hop', id: 5 },
    { name: 'Country', id: 6 },
    { name: 'Electronic', id: 7 },
];

export const Profile = () => {
    const [currentView, setCurrentView] = useState('accountSettings'); // default view
    const [selectedFavourites, setSelectedFavourites] = useState([]);
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const onSelect = (selectedList, selectedItem) => {
        setSelectedFavourites(selectedList);
    };

    const onRemove = (selectedList, removedItem) => {
        setSelectedFavourites(selectedList);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const renderContent = () => {
        switch (currentView) {
            case 'accountSettings':
                return (
                    <div className="box-right">
                        <h1 className="text-pengaturan">Pengaturan Akun</h1>
                        <form className="form-profile" action="" method="">
                            <div className="form-item">
                                <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                                <input type="text" className="form-control" id="namaLengkap" placeholder="Rania Dahayu" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="bio" className="form-label">Bio</label>
                                <input type="text" className="form-control" id="bio" placeholder="I Love Music ^_^" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="favorit" className="form-label">Favorit</label>
                                <Multiselect
                                    className="custom-multiselect"
                                    options={favouriteOptions}
                                    selectedValues={selectedFavourites}
                                    onSelect={onSelect}
                                    onRemove={onRemove}
                                    displayValue="name"
                                    placeholder="Pilih Favorit"
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="tgl-lahir" className="form-label">Tanggal Lahir</label>
                                <input type="date" className="form-control" id="tgl-lahir" placeholder="23/05/2003" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="provinsi" className="form-label">Provinsi</label>
                                <input type="text" className="form-control" id="provinsi" placeholder="Yogyakarta" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="kab-kota" className="form-label">Kabupaten/Kota</label>
                                <input type="text" className="form-control" id="kab-kota" placeholder="Yogyakarta" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="jenisKelamin" className="form-label">Jenis Kelamin</label>
                                <select className="form-control" id="jenisKelamin" value={gender} onChange={handleGenderChange}>
                                    <option value="" disabled>Pilih Jenis Kelamin</option>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                            </div>
                            <div className="form-item">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Pop" />
                            </div>
                            <div className="form-item">
                                <label htmlFor="noWa" className="form-label">No WhatsApp</label>
                                <input type="text" className="form-control" id="noWa" placeholder="Pop" />
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
        <div className="profile">
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