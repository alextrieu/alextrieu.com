import React from "react";
import Navbar from "../Navigation/NavigationHeader";
import Footer from "../Footer/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
