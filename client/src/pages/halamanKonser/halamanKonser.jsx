import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
import "./halamanKonser.css";
import Modal from "../../components/ui/Modal";

import iconLokasi from '../../assets/img/Pin_fill_black.svg';
import iconTgl from '../../assets/img/Date_range_fill_black.svg';
import iconKeranjangPink from '../../assets/img/Basket_alt_3_fill_pink.svg';

const HalamanKonser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [concert, setConcert] = useState(null);
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {
        const fetchConcert = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/concerts/${id}`, { withCredentials: true });
                console.log("Fetched Concert Data:", response.data);
                setConcert(response.data);
            } catch (error) {
                console.error("Error fetching concert:", error);
            }
        };
        fetchConcert();
    }, [id]);

    const handleTicketSelect = (ticket) => {
        setSelectedTicket(ticket);
        setTotalPrice(ticket.price);
    };

    const handlePesanSekarang = () => {
        if (!selectedTicket) {
            alert("Please select a ticket first");
            return;
        }
    
        const selectedTicketItem = {
            id: selectedTicket.id,
            ticket_id: selectedTicket.id, // Ensure we have ticket_id for consistency
            concert_name: concert.name,
            ticket_type: selectedTicket.type,
            price: selectedTicket.price,
            concert_id: concert.id, // Ensure we include concert_id
            quantity: 1,
        };
    
        sessionStorage.setItem('cartItems', JSON.stringify([selectedTicketItem]));
        sessionStorage.setItem('isDirectPurchase', true);
        navigate('/pembayaran');
    };

    const handleAddToCart = async () => {
        if (!selectedTicket) {
            alert("Please select a ticket first");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/cart', {
                concertId: id,
                ticketId: selectedTicket.id,
                quantity: 1
            }, { withCredentials: true });
            navigate('/home');
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const loadConcertImage = (imageUrl) => {
        return `/assets/img/${imageUrl}`;
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    if (!concert) return <p>Loading...</p>;

    return (
        <>
        <div className="halamanKonser">
            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="navigasi">Home / Jelajah / Konser</div>

                    <div className="content-konser">
                        <h1 className="nama-konser">{concert.name}</h1>
                        <div className="wrapper-lokasi-tgl">
                            <div className="lokasi-konser">
                                <img src={iconLokasi} alt="pinLokasi" className="icon-lokasi-tgl" />
                                <h4 className="text-lokasi-konser">{concert.venue}</h4>
                            </div>
                            <div className="tgl-konser">
                                <img src={iconTgl} alt="" className="icon-lokasi-tgl" />
                                <h4 className="text-tgl-konser">{new Date(concert.date).toLocaleDateString()}</h4>
                            </div>
                        </div>
                        <div className="genre-konser">
                            <span>Genre : </span> {concert.genre}
                        </div>
                        <div className="artis-konser">
                            <span>Artis : </span> {concert.artist}
                        </div>
                        <div className="sampul-konser">
                            <img src={loadConcertImage(concert.image_url)} alt="sampulKonser" className="img-sampul-konser" />
                        </div>
                        <h2 className="label-detail-konser">Detail Konser</h2>
                        <div className="detail-konser">
                            <p>
                                <span className="span-text-konser">Highlight</span><br />
                                {concert.description}
                            </p>
                        </div>
                        <h2 className="label-detail-konser">Pilihan Tiket</h2>
                        <div className="pilihan-tiket">
                            <form action="">
                                {concert.tickets && concert.tickets.map(ticket => (
                                    <div 
                                        className={`form-check ${selectedTicket && selectedTicket.id === ticket.id ? 'selected' : ''}`} 
                                        key={ticket.id} 
                                        onClick={() => handleTicketSelect(ticket)}
                                    >
                                        <input 
                                            className="form-check-input" 
                                            type="radio" 
                                            name="ticketOption" 
                                            id={`ticket${ticket.id}`} 
                                            checked={selectedTicket && selectedTicket.id === ticket.id} 
                                            onChange={() => handleTicketSelect(ticket)} 
                                        />
                                        <label className="form-check-label" htmlFor={`ticket${ticket.id}`}>
                                            <div className="wrapper-label-tiket">
                                                <h3 className="label-tiket">{ticket.type}</h3>
                                                <h5 className="text-harga">Harga</h5>
                                                <h3 className="harga-tiket">Rp {ticket.price.toLocaleString()}</h3>
                                            </div>
                                        </label>
                                    </div>
                                ))}
                                <div className="wrapper-tiket">
                                    <div className="total">
                                        <h5 className="label-total">Total</h5>
                                        <h3 className="total-harga">Rp {totalPrice.toLocaleString()}</h3>
                                    </div>
                                    <button type="button" className="btn btn-pilihan-keranjang" onClick={handleAddToCart}>
                                        <img src={iconKeranjangPink} alt="" className="icon-btn-pilihan-tiket" />
                                        Beli Tiket
                                    </button>
                                    <button type="button" className="btn btn-pilihan-beli" onClick={handleModalOpen}>Pesan Sekarang</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
            <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                <div className='modal-body'>
                    <div className='head-body'>
                        <h3 className="title-modal-hlm-konser">Konfirmasi</h3>
                    </div>
                    <div className='body-content'>
                        <div className="data-diri-modal">
                            <h6>E-Tiket Anda akan langsung dikirim ke</h6>
                            <h6>Email : <span>randahayu@gmail.com</span></h6>
                            <h6>WhatsApp : <span>088812345678</span></h6>
                        </div>
                        <div className="item-tiket-modal">
                            <h6>List item yang dibeli</h6>
                            <h6>Pilihan Tiket : <span>VVIP</span></h6>
                            <h6>Jumlah : <span>1 Tiket</span></h6>
                        </div>
                    </div>
                    <div className='body-end'>
                        <p>
                        Anda yakin ingin melanjutkan? <br/>
                        Jika Anda ingin mengubah Email atau WhatsApp Anda silakan ke <br/>
                        <Link to="/profile">Pengaturan Akun</Link>
                        </p>
                    </div>
                    <div className='btn-wrapper-modal'>
                        <button type='button' className='btn btn-close-modal' onClick={handleModalClose}>Batalkan</button>
                        <button type='button' className='btn btn-lanjut-modal' onClick={handlePesanSekarang} >Ya, Lanjutkan</button>
                    </div>
                </div>
            </Modal>
            </>
    );
};

export default HalamanKonser;
