import React, { useState } from "react";
import { BsBagHeartFill, BsCircleFill, BsExclamationCircleFill, BsFillRocketTakeoffFill } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import "./notifikasi.css";

export const Notifikasi = () => {
    const [readNotifications, setReadNotifications] = useState([]);

    const markAsRead = () => {
        // Tandai semua notifikasi sebagai sudah dibaca
        setReadNotifications([]);
    };

    const isRead = (notification) => {
        // Periksa apakah notifikasi sudah dibaca
        return readNotifications.includes(notification);
    };

    return (
        <>
            <div className="notifikasi">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Konser Anda / Buat Konser</div>

                        <div className="content-buat-konser">
                            <h1 className="header">Buat Konser Anda</h1>

                            <div className="tool-notifikasi">
                                <button type="button" className="btn btn-sudah-dibaca" onClick={markAsRead}>
                                    Sudah Dibaca
                                </button>
                            </div>

                            <div className="list-notifikasi">
                                <div className={`box-notifikasi posting ${isRead('posting') ? 'read' : ''}`}>
                                    <BsCircleFill className={`icon-indikator ${isRead('posting') ? 'read' : ''}`} />
                                    <div className="detail-notifikasi">
                                        <p>Anda berhasil memposting konser Sheila on 7</p>
                                        <div className="waktu-notifikasi">12 April 2024, 03.20 WIB</div>
                                    </div>
                                    <BsFillRocketTakeoffFill className="icon-box-notifikasi" />
                                </div>


                                <div className={`box-notifikasi gagal-posting ${isRead('gagal-posting') ? 'read' : ''}`}>
                                    <BsCircleFill className={`icon-indikator ${isRead('gagal-posting') ? 'read' : ''}`} />
                                    <div className="detail-notifikasi">
                                        <p>Anda berhasil memposting konser Sheila on 7</p>
                                        <div className="waktu-notifikasi">12 April 2024, 03.20 WIB</div>
                                    </div>
                                    <BsExclamationCircleFill className="icon-box-notifikasi" />
                                </div>
                                
                                <div className={`box-notifikasi terjual ${isRead('terjual') ? 'read' : ''}`}>
                                    <BsCircleFill className={`icon-indikator ${isRead('terjual') ? 'read' : ''}`} />
                                    <div className="detail-notifikasi">
                                        <p>1 tiket berhasil dibeli oleh Rahayu</p>
                                        <div className="waktu-notifikasi">10 April 2024, 14.32 WIB</div>
                                    </div>
                                    <BsBagHeartFill className="icon-box-notifikasi" />
                                </div>

                                <div className={`box-notifikasi ubah-password ${isRead('ubah-password') ? 'read' : ''}`}>
                                    <BsCircleFill className={`icon-indikator ${isRead('ubah-password') ? 'read' : ''}`} />
                                    <div className="detail-notifikasi">
                                        <p>1 tiket berhasil dibeli oleh Rahayu</p>
                                        <div className="waktu-notifikasi">10 April 2024, 14.32 WIB</div>
                                    </div>
                                    <RiLockPasswordLine className="icon-box-notifikasi" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
