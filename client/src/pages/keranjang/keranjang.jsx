import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { CgTrash } from "react-icons/cg";
import { BsPlusCircleFill, BsDashCircleFill } from "react-icons/bs";
import "./keranjang.css";

const Keranjang = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:3000/cart', { withCredentials: true });
                setCartItems(response.data);
            } catch (error) {
                console.error("Error fetching cart items:", error);
            }
        };
        fetchCartItems();
    }, []);

    const handleCheckboxChange = (id) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

    const handleQuantityChange = async (id, delta) => {
        const item = cartItems.find(item => item.id === id);
        const newQuantity = item.quantity + delta;
        if (newQuantity < 1) return;

        try {
            await axios.put(`http://localhost:3000/cart/${id}`, { quantity: newQuantity }, { withCredentials: true });
            setCartItems(cartItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            ));
        } catch (error) {
            console.error('Error updating item quantity:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/cart/${id}`, { withCredentials: true });
            setCartItems(cartItems.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const handleSelectAllChange = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setCartItems(cartItems.map(item => ({ ...item, checked: newSelectAll })));
    };

    const handleBuatPesanan = async () => {
        const selectedItems = cartItems.filter(item => item.checked);
        if (selectedItems.length === 0) {
            alert('Tidak ada item yang dipilih');
            return;
        }

        sessionStorage.setItem('cartItems', JSON.stringify(selectedItems));
        navigate('../pembayaran');
    };

    const subtotal = cartItems.reduce((total, item) => total + (item.checked ? item.price * item.quantity : 0), 0);
    const adminFee = 5000;
    const total = subtotal > 0 ? subtotal + adminFee : 0;

    return (
        <>
            <div className="keranjang">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Keranjang</div>

                        <div className="content-keranjang">
                            <h1 className="title">Keranjang</h1>
                            <div className="line" />
                            
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Konser</th>
                                        <th scope="col">Jenis Tiket</th>
                                        <th scope="col">Harga</th>
                                        <th scope="col">Jumlah</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map(item => (
                                        <tr key={item.id}>
                                            <th scope="row" className="item-table">
                                                <label className="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        checked={item.checked}
                                                        onChange={() => handleCheckboxChange(item.id)}
                                                    />
                                                    <span className="checkmark"></span>
                                                </label>
                                            </th>
                                            <td className="detail-item">
                                                <img src={`/assets/img/${item.image_url}`} alt="" className="sampul-konser" />
                                                <h3 className="nama-konser">{item.concert_name}</h3>
                                            </td>
                                            <td className="item-table">{item.ticket_type}</td>
                                            <td className="item-table">Rp {item.price.toLocaleString()}</td>
                                            <td className="item-table">
                                                <button className="icon-table count"
                                                    onClick={() => handleQuantityChange(item.id, -1)}
                                                    disabled={item.quantity <= 1}>
                                                    <BsDashCircleFill />
                                                </button>
                                                {item.quantity}
                                                <button className="icon-table count"
                                                    onClick={() => handleQuantityChange(item.id, 1)}>
                                                    <BsPlusCircleFill />
                                                </button>
                                            </td>
                                            <td className="item-table">
                                                <button className="icon-table" onClick={() => handleDelete(item.id)} >
                                                    <CgTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="pilih-semua">
                                <h3>Pilih Semua</h3>
                                <label className="custom-checkbox">
                                    <input
                                        type="checkbox"
                                        checked={selectAll}
                                        onChange={handleSelectAllChange}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="sub-total">
                                <h3>Sub Total Produk :</h3>
                                <h3>Rp {subtotal.toLocaleString()}</h3>
                            </div>
                            <div className="biaya-admin">
                                <h3>Biaya Admin :</h3>
                                <h3>Rp {adminFee.toLocaleString()}</h3>
                            </div>
                            <div className="total-pembayaran">
                                <h2>Total Pembayaran : </h2>
                                <div className="wrapper">
                                    <h2>Rp {total.toLocaleString()}</h2>
                                    <button type="button" className="btn btn-beli" onClick={handleBuatPesanan} disabled={subtotal === 0}>Buat Pesanan</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Keranjang;
