import React from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
export function Projects() {
  return (
    <div id="projects">
      <div>
        <h3 style={{ marginTop: 100, marginBottom: "1rem" }}>
          What I've been working on
        </h3>
        <p style={{ marginBottom: 70 }}>
          I like to stay busy and always have a project in the works. Take a
          look at some of the applications, projects, and web pages I've
          dedicated my time to. I will be uploading more projects soon!
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
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
        <div className="view view-first">
          <img
            alt=""
            src="https://i.ibb.co/9rv7fL6/logo-artkampen.png"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
          <div className="mask">
            <h2>Artkampen</h2>
            <p>
              App hosting seasonal fishing tournaments with medals, avatars, and
              profile customization.
            </p>
            <Link to="/portfolio/artkampen" className="info">
              VIEW
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
