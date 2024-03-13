import React from "react";
import Navbar from "../Navigation/NavigationHeader";
import Footer from "../Footer/Footer";
import "./MainLayout.css";

export default function MainLayout({ children }) {
  return (
    <div className="site-container">
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </div>
  );
}
