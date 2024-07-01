import React, { useState, useEffect } from "react";
import axios from 'axios';
import { CgChevronRight } from "react-icons/cg";
import { useTable } from 'react-table';
import "./pendapatan.css";
import commercialImg from "../../assets/img/commercial.png";
import cashImg from "../../assets/img/cash.png";

const SalesTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({ columns, data });

    return (
        <div className="table-wrapper">
            <table {...getTableProps()} className="custom-table">
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export const Pendapatan = () => {
    const [activeMenu, setActiveMenu] = useState("Pendapatan");
    const [salesData, setSalesData] = useState([]);
    const [revenueData, setRevenueData] = useState({
        concertCount: 0,
        totalRevenue: 0
    });

    useEffect(() => {
        const fetchRevenueData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/revenue', { withCredentials: true });
                setRevenueData(response.data);
            } catch (error) {
                console.error('Error fetching revenue data', error);
            }
        };

        const fetchSalesData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/sales-report', { withCredentials: true });
                setSalesData(response.data);
            } catch (error) {
                console.error('Error fetching sales data', error);
            }
        };

        fetchRevenueData();
        fetchSalesData();
    }, []);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const columns = [
        {
            Header: 'No',
            accessor: (row, i) => i + 1,
            Cell: ({ value }) => <div style={{ width: '50px', textAlign: 'center' }}>{value}</div> // Atur lebar kolom "No"
        },
        {
            Header: 'Tanggal Penjualan',
            accessor: 'sale_date',
            Cell: ({ value }) => new Date(value).toLocaleDateString()
        },
        {
            Header: 'Konser',
            accessor: 'concert_name'
        },
        {
            Header: 'Jenis Tiket',
            accessor: 'ticket_type'
        },
        {
            Header: 'Harga Tiket',
            accessor: 'ticket_price',
            Cell: ({ value }) => `Rp ${value.toLocaleString()}`
        },
        {
            Header: 'Jumlah',
            accessor: 'quantity'
        },
        {
            Header: 'Subtotal',
            accessor: row => row.ticket_price * row.quantity,
            Cell: ({ value }) => `Rp ${value.toLocaleString()}`
        },
        {
            Header: 'Diskon',
            accessor: () => '0%'
        },
        {
            Header: 'Total',
            accessor: 'total_amount',
            Cell: ({ value }) => `Rp ${value.toLocaleString()}`
        }
    ];

    return (
        <div className="pendapatan">
            <div className="content">
                <div className="container-fluid mx-5">
                    <div className="navigasi">Home / Konser Anda</div>
                    <h1 className="header">Lihat Pendapatan Anda</h1>
                    <div className="content-pendapatan">
                        <div className="box-nav">
                            <ul className="list-menu-pendapatan">
                                <li
                                    className={`menu-pendapatan ${activeMenu === "Pendapatan" ? "active" : ""}`}
                                    onClick={() => handleMenuClick("Pendapatan")}
                                >
                                    Laporan Penjualan
                                    <CgChevronRight className="icon-arrow" />
                                </li>
                            </ul>
                        </div>

                        {activeMenu === "Pendapatan" && (
                            <div className="box-content-menu">
                                <h1 className="header-menu">Pendapatan</h1>
                                <div className="tool-menu">
                                    <div className="box-tool">
                                        <img src={commercialImg} alt="commercialImg" className="icon-tool" />
                                        <div className="detail-tool">
                                            <h3>Konser ditayangkan</h3>
                                            <h5>{revenueData.concertCount} Konser</h5>
                                        </div>
                                    </div>
                                    <div className="box-tool">
                                        <img src={cashImg} alt="commercialImg" className="icon-tool" />
                                        <div className="detail-tool">
                                            <h3>Total Pendapatan</h3>
                                            <h5>{revenueData.totalRevenue.toLocaleString()}</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-menu-pendapatan">
                                    <SalesTable columns={columns} data={salesData} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pendapatan;
