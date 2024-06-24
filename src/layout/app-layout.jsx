import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
import Footer from "../components/common/Footer/Footer";
import "./appLayout.css"; // Import the CSS file for styling

function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="AppLayout-content">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AppLayout;
