import React from "react";
import { Problems } from "..//Problems";
import "./Description.css";

export function Description() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-2"></div>
      <div className="col-10 col-xl-8 description">
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Pokedèx</h1>
        <p style={{ marginBottom: 50 }}>
          Pokedèx is the reproduction of the Pokèmon's encyclopedia wich store
          all the existing Pokèmons.
          <br />
          It is also my first personal project I built to solidify my knowledge
          of working with API.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://z7fc9.csb.app/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>View Site</h2>
        </a>
        <div
          style={{
            boxShadow: "0px 10px 15px 2px rgb(120, 120, 120)",
            marginBottom: 150,
            width: "100%",
            marginTop: 100
          }}
        >
          <img
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/757941531159298169/pOKEMONdesktop-preview.png"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: 50 }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The Pokedèx allows the users to find information about each and every
          Pokèmon, writing the name or pick up a number. With the 'Play' button
          the Pokedèx will speak and explain all the information about the
          Pokèmon you searched.
          <br />I kept the design and the background super simple in order to
          keep the focus on the Pokedèx.
        </p>
        <Problems />
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
