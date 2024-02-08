import React, { useState } from "react";

export function BarMenu() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    if (menu) {
      setMenu(false);
      document.body.classList.remove("menu-open");
    } else {
      setMenu(true);
      document.body.classList.add("menu-open");
    }
  }

  return (
    <div className="barmenu" style={{ width: "100%" }}>
      <div style={{ display: "flex", alignItems: "center" }} className="logo">
        <a style={{ margin: 0 }} href="/">
          <h3 style={{ margin: 0 }}>GQ</h3>
        </a>
      </div>
      <div
        onClick={toggleMenu}
        className=""
        style={{
          marginTop: 20,
          marginBottom: 10,
          marginLeft: " auto",
          width: 50,
          height: 35,
          cursor: "pointer",
        }}
      >
        <div className="menu"></div>
        <div className="menu"></div>
        <div className="menu"></div>
      </div>
      {menu ? (
        <div
          style={{
            backgroundColor: "hsla(186, 90%, 80%, 90%)",
            position: "absolute",
            padding: 40,
            borderRadius: 8,
            textAlign: "center",
            fontWeight: 500,
            display: "flex",
            flexDirection: "column",
            width: "100%",
            left: 0,
            top: "5rem",
          }}
        >
          <a href="/#about">
            <span>About</span>
          </a>
          <a href="/#projects">
            <span>Projects</span>
          </a>
          <a href="/#contact">
            <span>Contact</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}
