import React from "react";
import "../styles/main.scss";
import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children, homepageText, title }) => {
  return (
    <>
      <div className="site__wrapper" id="main">
        <Nav title={title} />
        <main>{children}</main>
      </div>{" "}
      <Footer />
    </>
  );
};

export default Layout;
