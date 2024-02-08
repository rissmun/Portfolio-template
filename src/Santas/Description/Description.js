import React from "react";
import { Problems } from "..//Problems";
import "./Description.css";
import { Header } from "../../Components/Header";

export function Description() {
  return (
    <div className="row ">
      <Header></Header>
      <div className="col"></div>
      <div className="col-10  col-xl-9 col-lg-11 col-md-11 col-sm-10 description">
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Santa's Factory</h1>
        <p style={{ marginBottom: 50 }}>
          Santa's Factory is a 2D videogame focused on additions, with just the
          right amount of action and logic.
          <br />
          The player will control a workshop elf to deliver as many presents as
          he can into the right tubes in less than 60 seconds.
          <br />
          There will be random additions at the bottom of the screen, the elf
          will pick up the presents from the big present's bag and then deliver
          it to the tube with the right solution.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://santas.gianluca.website/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <h2>View Site</h2>
        </a>
        <div
          style={{
            boxShadow: "0px 10px 15px 2px rgb(120, 120, 120)",
            marginBottom: 150,
            width: "85%",
            marginTop: 100
          }}
        >
          <img
            alt=""
            src="https://i.imgur.com/cylIIfg.png"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: 50 }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The goal was to create a game where the player would keep the focus on
          the additions but never get bored.
          <br />
          I'm a player myself and I thought having a score and a cooldown timer
          would add the right pressure and entertainment, to challenge the
          player to do better each time he restarted the game.
          <br />
          That process will automatically improve his mathematics skills, his
          mental habits of logic, and tenacity.
        </p>
        <Problems />
      </div>
      <div className="col"></div>
    </div>
  );
}
