import React, { useState, useEffect, useRef } from "react";
import { BarMenu } from "./Bars/Barmenu";

export function Header() {
  const [isSticky, setSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (
        headerRef.current &&
        window.pageYOffset > headerRef.current.offsetTop
      ) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={headerRef} className={isSticky ? "header sticky" : "header"}>
      <div className="col"></div>
      <div className="content-header col-10  col-xl-9 col-lg-11 col-md-11 col-sm-10">
        <div
          className="links"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 20,
            paddingBottom: 20,
          }}
        >
          <div className="logo">
            <a href="/">
              <h3>GQ</h3>
            </a>
          </div>
          <div style={{ gap: "2rem", display: "flex" }}>
            <a className="header-links" href="/#about">
              <h3 style={{ fontWeight: 600, fontSize: 18 }}>About</h3>
            </a>
            <a className="header-links" href="/#projects">
              <h3 style={{ fontWeight: 600, fontSize: 18 }}>Projects</h3>
            </a>
            <a className="header-links" href="/#contact">
              <h3 style={{ fontWeight: 600, fontSize: 18 }}>Contact</h3>
            </a>
          </div>
     
        </div>
        <BarMenu />
      </div>
      <div className="col"></div>
    </div>
  );
}
