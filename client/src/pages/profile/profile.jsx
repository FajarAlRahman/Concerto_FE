import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Multiselect from 'multiselect-react-dropdown';
import { CgChevronRight } from "react-icons/cg";
import "./profile.css";

import profileUser from "../../assets/img/profile.jpeg";
import iconEditProfile from "../../assets/img/Edit_fill.svg";

export const Profile = () => {
    const [currentView, setCurrentView] = useState('accountSettings');
    const [profile, setProfile] = useState({});
    const [selectedFavourites, setSelectedFavourites] = useState([]);
    const [gender, setGender] = useState('');
    const [favoriteOptions, setFavoriteOptions] = useState([]);
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmNewPassword: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        fetchProfile();
        fetchFavorites();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:3000/profile', { withCredentials: true });
            setProfile(response.data);
            setSelectedFavourites(response.data.favorites || []);
            setGender(response.data.gender);

            if (response.data.birthdate) {
                setProfile(prevProfile => ({
                    ...prevProfile,
                    birthdate: new Date(response.data.birthdate).toISOString().split('T')[0]
                }));
            }
        } catch (error) {
            console.error('Error fetching profile', error);
        }
    };

    const fetchFavorites = async () => {
        try {
            const response = await axios.get('http://localhost:3000/favorites', { withCredentials: true });
            const options = [
                ...response.data.genres.map(genre => ({ name: genre.name, id: genre.id, type: 'genre' })),
                ...response.data.artists.map(artist => ({ name: artist.name, id: artist.id, type: 'artist' }))
            ];
            setFavoriteOptions(options);
        } catch (error) {
            console.error('Error fetching favorites', error);
        }
    };

    const onSelect = (selectedList, selectedItem) => {
        setSelectedFavourites(selectedList);
    };

    const onRemove = (selectedList, removedItem) => {
        setSelectedFavourites(selectedList);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedProfile = {
            ...profile,
            favorite: selectedFavourites.map(fav => fav.name).join(','),
            gender
        };
        try {
            await axios.post('http://localhost:3000/profile', updatedProfile, { withCredentials: true });
            alert('Profile updated successfully');
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    const handlePasswordChange = (e) => {
        const { id, value } = e.target;
        setPasswordData(prevState => ({ ...prevState, [id]: value }));
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/change-password', passwordData, { withCredentials: true });
            alert(response.data.message);
            setPasswordData({
                currentPassword: '',
                newPassword: '',
                confirmNewPassword: ''
            });
        } catch (error) {
            console.error('Error changing password', error);
            alert('Error changing password');
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
                                <label htmlFor="namaLengkap" className="form-label">Nama Lengkap</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="namaLengkap"
                                    value={profile.full_name || ''}
                                    onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="bio" className="form-label">Bio</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bio"
                                    value={profile.bio || ''}
                                    onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="favorit" className="form-label">Favorit</label>
                                <Multiselect
                                    className="custom-multiselect"
                                    options={favoriteOptions}
                                    selectedValues={selectedFavourites}
                                    onSelect={onSelect}
                                    onRemove={onRemove}
                                    displayValue="name"
                                    placeholder="Pilih Favorit"
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="tgl-lahir" className="form-label">Tanggal Lahir</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="tgl-lahir"
                                    value={profile.birthdate || ''}
                                    onChange={(e) => setProfile({ ...profile, birthdate: e.target.value })}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="provinsi" className="form-label">Provinsi</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="provinsi"
                                    value={profile.province || ''}
                                    onChange={(e) => setProfile({ ...profile, province: e.target.value })}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="kab-kota" className="form-label">Kabupaten/Kota</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="kab-kota"
                                    value={profile.city || ''}
                                    onChange={(e) => setProfile({ ...profile, city: e.target.value })}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="jenisKelamin" className="form-label">Jenis Kelamin</label>
                                <select
                                    className="form-control"
                                    id="jenisKelamin"
                                    value={gender}
                                    onChange={handleGenderChange}
                                >
                                    <option value="">Pilih Jenis Kelamin</option>
                                    <option value="male">Laki-laki</option>
                                    <option value="female">Perempuan</option>
                                </select>
                            </div>
                            <div className="form-item">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={profile.email || ''}
                                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="phoneNumber" className="form-label">No WhatsApp</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phoneNumber"
                                    value={profile.phone_number || ''}
                                    onChange={(e) => setProfile({ ...profile, phone_number: e.target.value })}
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
                        <form className="form-profile" onSubmit={handlePasswordSubmit}>
                            <div className="form-item">
                                <label htmlFor="currentPassword" className="form-label">Masukkan Password Lama</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="currentPassword"
                                    placeholder="Password Sekarang"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="newPassword" className="form-label">Masukkan Password Baru</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="newPassword"
                                    placeholder="Password Baru"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="confirmNewPassword" className="form-label">Konfirmasi Password Baru</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="confirmNewPassword"
                                    placeholder="Konfirmasi Password Baru"
                                    value={passwordData.confirmNewPassword}
                                    onChange={handlePasswordChange}
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
                            <li className="menu-akun" onClick={() => {
                                setCurrentView('passwordSettings');
                                setPasswordData({
                                    currentPassword: '',
                                    newPassword: '',
                                    confirmNewPassword: ''
                                });
                            }}>
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
