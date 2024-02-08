import React from "react";
import { Problems } from "..//Problems";
import "./Description.css";

export function Description() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-2"></div>
      <div className="col-10 col-xl-8 description">
        <h1 style={{ marginTop: 150, marginBottom: 50 }}>Ravenous</h1>
        <p style={{ marginBottom: 50 }}>
          Ravenous is the first big project I built for a Codecademy React/API
          test. Ravenous allows users to find any business all over the world
          using the API provided by Yelp.com.
          <br />
          The user can also use filters to customize the research as Best Match,
          Highest Rated, and Most Reviewed.
        </p>
        <a
          style={{ textDecoration: "none", marginLeft: 30 }}
          href="https://ravenous-kappa.vercel.app/"
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
            src="https://cdn.discordapp.com/attachments/165746589309206528/757671299240820947/ravenous2.png"
            style={{ width: "100%" }}
          />
        </div>
        <h3 style={{ marginBottom: 50 }}>Project Purpose and Goal</h3>
        <p style={{ marginBottom: 50 }}>
          The challenge was to integrate with the Yelp API to find businesses
          using three different filters. Once the businesses are found the user
          should be able to get to the homepage of the business by clicking on
          its image.
          <br />
          The cool part of the yelp API is that the user can search for
          businesses by keyword, category, and location.
        </p>
        <Problems />
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
