import React from "react";
import { BarMenu } from "./Barmenu";

export function Bar() {
  return (

      <div className="row effect">
        <div className="col" />

        <div className="col-10  col-xl-9 col-lg-11 col-md-11 col-sm-10 ">
          <div
            className="links"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "2rem",
              padding: 20,
            }}
          >
            <a className="links" href="#about">
              <h3 style={{ fontWeight: 600, fontSize: 18 }}>About</h3>
            </a>
            <a className="links" href="#projects">
              <h3 style={{ fontWeight: 600, fontSize: 18 }}>Projects</h3>
            </a>
            <a className="links" href="#contact">
              <h3 style={{ fontWeight: 600, fontSize: 18 }}>Contact</h3>
            </a>
          </div>
          <BarMenu />
        </div>

        <div style={{}} className="col" />
      </div>
  );
}
