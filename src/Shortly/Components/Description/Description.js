import React from "react";
import { Problems } from "..//Problems";
import "./Description.css";
import { Header } from "../../../Components/Header";

export function Description() {
  return (
    <div className="row ">
      <Header />
      <div className="col"></div>
      <div className="col-10  col-xl-9 col-lg-11 col-md-11 col-sm-10 description">
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Artkampen</h1>
        <p style={{ marginBottom: 50 }}>
          Artkampen is a Web App where users compete to win the season's
          tournament by catching the most fish in Sweden. Users can earn medals
          by meeting objectives and personalize their profiles with dynamic
          avatars and background images unlocked through achieving these
          objectives.
          <br />I built the front end and managed the majority of the logic
          behind the achievements and objectives.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://artkampen.se/"
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
            marginTop: 100,
            borderRadius: "30px",
          }}
        >
          <img
            alt=""
            src="https://i.ibb.co/4drKppY/artkmapen-leaderboard.png"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: 50 }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The goal for Sportfiskarna for this year's competition was to
          introduce competitions within the competition, aiming to encourage,
          inspire, and motivate all participants. Last year, the focus was
          primarily on the top 3, resulting in some participants gaining a
          significant lead.
          <br />
          My goal as a developer was to create a system that would take care of
          all the logic behind the achievements based on the user type of catch.
        </p>
        <Problems />
      </div>
      <div className="col"></div>
    </div>
  );
}
