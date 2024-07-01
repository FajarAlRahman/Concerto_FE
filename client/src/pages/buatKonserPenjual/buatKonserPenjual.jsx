import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BsCircleFill, BsFillTrash3Fill, BsPlusLg } from "react-icons/bs";
import "./buatKonserPenjual.css";

export const BuatKonserPenjual = () => {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [step, setStep] = useState(1); // State untuk the current step
    const [selectedTicketType, setSelectedTicketType] = useState("berbayar"); // State untuk selected ticket type
    const [categories, setCategories] = useState([{ id: 1, name: "", price: "" }]); // Initialize with one default category value 1
    const [jumlahTiket, setJumlahTiket] = useState(""); // State untuk jumlah tiket
    const [tglAkhirTiket, setTglAkhirTiket] = useState(""); // State untuk tanggal akhir tiket

    const [konserData, setKonserData] = useState({
        name: '',
        venue: '',
        date: '',
        genre: '',
        artist: '',
        description: '',
        image_url: '',
        seller_id: sessionStorage.getItem('userId') // Ambil seller_id dari session storage
    });

    useEffect(() => {
        // Set default category values 1
        setCategories([{ id: 1, name: "", price: "" }]);
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(URL.createObjectURL(file));
            setKonserData({ ...konserData, image_url: file.name });
        }
    };
    

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setKonserData({ ...konserData, [name]: value });
    };

    const handleAddCategory = () => {
        setCategories([...categories, { id: categories.length + 1, name: "", price: "" }]);
    };

    const handleCategoryChange = (id, key, value) => {
        const updatedCategories = categories.map(category => 
            category.id === id ? { ...category, [key]: value } : category
        );
        setCategories(updatedCategories);
    };

    const handleRemoveCategory = (id) => {
        const updatedCategories = categories.filter(category => category.id !== id);
        setCategories(updatedCategories);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Submitting concert data..."); // Debugging
            console.log("Konser Data:", konserData); // Debugging
            console.log("Categories:", categories); // Debugging
    
            const formData = new FormData();
            formData.append('name', konserData.name);
            formData.append('venue', konserData.venue);
            formData.append('date', konserData.date);
            formData.append('genre', konserData.genre);
            formData.append('artist', konserData.artist);
            formData.append('description', konserData.description);
            formData.append('seller_id', sessionStorage.getItem('userId')); // Ambil seller_id dari sessionStorage
            formData.append('categories', JSON.stringify(categories));
    
            const imageInput = document.getElementById('image_url');
            if (imageInput && imageInput.files.length > 0) {
                console.log("Image file found:", imageInput.files[0]); // Debugging
                formData.append('imageData', imageInput.files[0]); // Ambil file gambar
            } else {
                console.error("Image input element or files not found."); // Debugging
            }
    
            console.log("FormData prepared:", formData); // Debugging
    
            const response = await axios.post('http://localhost:3000/createConcert', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            console.log("Response received:", response.data); // Debugging
            if (response.data.msg === "Konser berhasil dibuat") {
                navigate('/homePenjual');
            } else {
                alert(response.data.msg);
            }
        } catch (error) {
            console.error('There was an error!', error);
        }
    };
        

    return (
        <>
            <div className="buatKonserPenjual">
                <div className="content">
                    <div className="container-fluid mx-5">
                        <div className="navigasi">Home / Konser Anda / Buat Konser</div>

                        <div className="content-buat-konser">
                            <h1 className="header">Buat Konser Anda</h1>

                            {step === 1 && (
                                <div className="area-input informasi-area">
                                    <div className="indicator">
                                        <div className="indicator-left">
                                            <BsCircleFill className="icon-indicator" />
                                            <div className="line-left" />
                                        </div>
                                        <div className="indicator-right">
                                            <div className="line-right" />
                                            <BsCircleFill className="icon-indicator" />
                                        </div>
                                    </div>
                                    <div className="label-indicator">
                                        <h3 className="label-left">Informasi Konser</h3>
                                        <h3 className="label-right">Tiket</h3>
                                    </div>
                                    <h2 className="header">Informasi Konser</h2>

                                    <form action="" method="" className="form-input">
                                        <div className="form-item">
                                            <label htmlFor="name" className="form-label">Nama Konser Musik</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="name" 
                                                name="name"
                                                placeholder="" 
                                                value={konserData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="venue" className="form-label">Alamat Lengkap</label>
                                            <textarea 
                                                className="form-control alamat-konser" 
                                                id="venue" 
                                                name="venue"
                                                placeholder="" 
                                                value={konserData.venue}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="date" className="form-label">Tanggal Konser</label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                id="date" 
                                                name="date"
                                                placeholder="" 
                                                value={konserData.date}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="genre" className="form-label">Genre</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="genre" 
                                                name="genre"
                                                placeholder="" 
                                                value={konserData.genre}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="artist" className="form-label">Artist</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                id="artist" 
                                                name="artist"
                                                placeholder="" 
                                                value={konserData.artist}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="description" className="form-label">Detail Konser</label>
                                            <p>Tuliskanlah jadwal konser seperti jam atau peraturan konser yang belum tercantum di atas. Anda juga bisa masukkan penjelasan mengenai acara Anda.</p>
                                            <textarea 
                                                className="form-control alamat-konser" 
                                                id="description" 
                                                name="description"
                                                placeholder="" 
                                                value={konserData.description}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-item">
                                            <label htmlFor="image_url" className="form-label">Gambar Konser</label>
                                            <p>Unggah foto atau gambar bisa berupa poster acara Anda ataupun thumbnail. Ukuran gambar yang disarankan 890 x 480 pixel. Besar gambar maksimal 1 Mb, jenis file jpg, jpeg, png. Maksimal unggahan 1 gambar.</p>
                                            <div className="upload-container" onClick={() => document.getElementById("image_url").click()}>
                                                {image ? (
                                                    <img src={image} alt="Preview" className="image-preview" />
                                                ) : (
                                                    <div className="icon-upload">
                                                        <BsPlusLg className="icon-plus" />
                                                        <h5>Unggah Gambar</h5>
                                                    </div>
                                                )}
                                                <input
                                                    type="file"
                                                    className="input-file"
                                                    id="image_url"
                                                    name="image_url"
                                                    onChange={handleImageChange}
                                                    accept="image/png, image/jpeg"
                                                    style={{ display: 'none' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="form-btn">
                                            <button type="button" className="btn btn-simpan" onClick={handleNextStep}>Simpan dan Lanjutkan</button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="area-input tiket-area">
                                    <div className="indicator">
                                        <div className="indicator-left">
                                            <BsCircleFill className="icon-indicator" />
                                            <div className="line-left" />
                                        </div>
                                        <div className="indicator-right">
                                            <div className="line-right" />
                                            <BsCircleFill className="icon-indicator" />
                                        </div>
                                    </div>
                                    <div className="label-indicator">
                                        <h3 className="label-left">Informasi Konser</h3>
                                        <h3 className="label-right">Tiket</h3>
                                    </div>
                                    <h2 className="header">Tiket</h2>

                                    <div className="jenis-tiket">
                                        <h3>Pilih Jenis Tiket</h3>
                                        <div className="wrapper-jenis-tiket">
                                            <button 
                                                type="button" 
                                                className="btn btn-jenis-tiket" 
                                                id="tiket-berbayar" 
                                                onClick={() => handleTicketTypeSelection("berbayar")}
                                                style={selectedTicketType === "berbayar" ? { color: "#FFFFFF", backgroundColor: "#c91d92" } : {}}
                                            >
                                                Tiket Berbayar
                                            </button>
                                            <button 
                                                type="button" 
                                                className="btn btn-jenis-tiket" 
                                                id="tiket-gratis" 
                                                onClick={() => handleTicketTypeSelection("gratis")}
                                                style={selectedTicketType === "gratis" ? { color: "#FFFFFF", backgroundColor: "#c91d92" } : {}}
                                            >
                                                Tiket Gratis
                                            </button>
                                        </div>
                                    </div>

                                    {selectedTicketType === "gratis" && (
                                        <div>
                                            <form action="" method="" className="form-input">
                                                <div className="form-item">
                                                    <label htmlFor="jumlah-tiket-gratis" className="form-label">Jumlah Tiket</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="jumlah-tiket-gratis" 
                                                        placeholder="" 
                                                        value={jumlahTiket}
                                                        onChange={(e) => setJumlahTiket(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <label htmlFor="tgl-akhir-tiket-gratis" className="form-label">Tanggal Akhir Penjualan Tiket</label>
                                                    <input 
                                                        type="date" 
                                                        className="form-control" 
                                                        id="tgl-akhir-tiket-gratis" 
                                                        placeholder="" 
                                                        value={tglAkhirTiket}
                                                        onChange={(e) => setTglAkhirTiket(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-btn-footer">
                                                    <button type="button" className="btn btn-kembali" onClick={() => setStep(step - 1)}>Kembali</button>
                                                    <button type="submit" className="btn btn-simpan" onClick={handleSubmit}>Simpan dan Lanjutkan</button>
                                                </div>
                                            </form>
                                        </div>
                                    )}

                                    {selectedTicketType === "berbayar" && (
                                        <div>
                                            <form action="" method="" className="form-input">
                                                <div className="form-item">
                                                    <label htmlFor="jumlah-tiket-konser" className="form-label">Jumlah Tiket</label>
                                                    <input 
                                                        type="number" 
                                                        className="form-control" 
                                                        id="jumlah-tiket-konser" 
                                                        placeholder="" 
                                                        value={jumlahTiket}
                                                        onChange={(e) => setJumlahTiket(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-item">
                                                    <label htmlFor="tgl-akhir-tiket-konser" className="form-label">Tanggal Akhir Penjualan Tiket</label>
                                                    <input 
                                                        type="date" 
                                                        className="form-control" 
                                                        id="tgl-akhir-tiket-konser" 
                                                        placeholder="" 
                                                        value={tglAkhirTiket}
                                                        onChange={(e) => setTglAkhirTiket(e.target.value)}
                                                    />
                                                </div>
                                                <div className="form-btn">
                                                    <button type="button" className="btn btn-tambah-kategori" id="tambah-kategori" onClick={handleAddCategory}>Tambah Kategori</button>
                                                </div>

                                                <div className="area-kategori-tiket">
                                                    {categories.map((category) => (
                                                        <div className="kategori-tiket" key={category.id}>
                                                            <div className="header-kategori">
                                                                <h3>Kategori {category.id}</h3>
                                                                <button type="button" className="btn btn-hapus-kategori" id="hapus-kategori" onClick={() => handleRemoveCategory(category.id)}>
                                                                    <BsFillTrash3Fill className="icon-hapus-kategori" />
                                                                </button>
                                                            </div>
                                                            <div className="form-item">
                                                                <label htmlFor={`nama-tiket-${category.id}`} className="form-label">Nama Tiket</label>
                                                                <input 
                                                                    type="text" 
                                                                    className="form-control" 
                                                                    id={`nama-tiket-${category.id}`} 
                                                                    placeholder="" 
                                                                    value={category.name}
                                                                    onChange={(e) => handleCategoryChange(category.id, "name", e.target.value)}
                                                                />
                                                            </div>
                                                            <div className="form-item">
                                                                <label htmlFor={`harga-tiket-${category.id}`} className="form-label">Harga Tiket</label>
                                                                <input 
                                                                    type="number" 
                                                                    className="form-control" 
                                                                    id={`harga-tiket-${category.id}`} 
                                                                    placeholder="" 
                                                                    value={category.price}
                                                                    onChange={(e) => handleCategoryChange(category.id, "price", e.target.value)}
                                                                />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                <div className="form-btn-footer">
                                                    <button type="button" className="btn btn-kembali" onClick={() => setStep(step - 1)}>Kembali</button>
                                                    <button type="submit" className="btn btn-simpan" onClick={handleSubmit}>Simpan dan Lanjutkan</button>
                                                </div>
                                            </form>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuatKonserPenjual;
