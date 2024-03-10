import React from "react";
import Navbar from "../Navigation/NavigationHeader";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
