import React from "react";
import { Link } from "react-router-dom";
import { BsMusicNoteBeamed, BsBell, BsGraphUp, BsFillHouseDoorFill } from "react-icons/bs";
import "./navbarPenjual.css";

import profileImg from '../../../assets/img/profile.jpeg';

const NavbarPenjual = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dar nav-penjual" >
        <div className="container-fluid mx-5">
          <Link className="navbar-brand" to="/homePenjual">concerto.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/homePenjual">
                  <BsFillHouseDoorFill className="nav-icon" alt="menu-icon" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/konserAnda">
                  <BsMusicNoteBeamed className="nav-icon" />
                  Konser Anda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/pendapatan">
                  <BsGraphUp className="nav-icon" />
                  Pendapatan
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/notifikasi">
                  <BsBell className="nav-icon" />
                  Notifikasi
                </Link>
              </li>
            </ul>
          </div>
          <div className="profile-nav">
            <Link className="nav-link mx-0" to="/profilePenjual">
              <img className="menu-profile-nav" alt="menu-icon" src={profileImg} />
            </Link>
          </div>
        </div>
      </nav >
    </>
  );
};

export default NavbarPenjual;
