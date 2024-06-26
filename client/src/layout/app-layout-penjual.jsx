import React from "react";
import NavbarPenjual from "../components/common/NavbarPenjual/NavbarPenjual";
import Footer from "../components/common/Footer/Footer";
import "./appLayout.css"; // Import the CSS file for styling

function AppLayoutPenjual({ children }) {
  return (
    <div className="app-layout">
      <NavbarPenjual />
      <div className="AppLayout-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayoutPenjual;
