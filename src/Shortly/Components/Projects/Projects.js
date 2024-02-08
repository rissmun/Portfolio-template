import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

export function Projects() {
  return (
    <div className="row " style={{ backgroundColor: "rgb(240, 240, 240,0.5)" }}>
      <div className="col-1  col-xl-2"></div>
      <div className="col-10 col-xl-8">
        <div className="paragraph" style={{ width: "80%" }}>
          <h3 style={{ marginTop: 100, marginBottom: 50 }}>Other Projects</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            marginBottom: 100,
          }}
        >
          <div className="view view-first">
            <img
              alt=""
              src="https://i.imgur.com/CpvvCLJ.png"
              style={{ width: 300, height: 300 }}
            />
            <div className="mask">
              <h2>Santa's Factory</h2>
              <p>
                A 2D action game based on mathematical additions in a Christmas
                environment.
              </p>
              <Link to="/portfolio/santas" className="info">
                VIEW
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
