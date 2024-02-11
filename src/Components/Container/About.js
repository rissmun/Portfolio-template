import React from "react";

export function About() {
  return (
    <div
      id="about"
      className="row shadow-lg about-me"
      style={{
        color: "",
        height: "",
        backgroundColor: "white",
        padding: "2rem",
        marginTop: -50,
        borderRadius: 8,
      }}
    >
      <div
        style={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem 2rem",
        }}
      >
        <h3 style={{ maxWidth: "450px" }}>
          Armed with sharp problem-solving abilities and a proactive approach to
          front-end challenges
        </h3>
      </div>
      <div
        className=""
        style={{
          width: "50%",
          padding: "1rem 2rem",
        }}
      >
        <h3 style={{ marginBottom: "1rem" }}>About Me</h3>
        <p style={{ margin: 0, color: "" }}>
          I'm Russian, and seven years ago, I moved to the beautiful Sweden with
          my girlfriend. Now, we have two wonderful kids.
          <br />
          <br />
          In 2020, I began my coding journey with a course on Codecademy about
          HTML+CSS+JS and later, i learned React.
          <br />
          By March 2021, I embarked on my web developer career, sharpening my
          skills in WordPress and PHP.
          <br />
          <br />
          Alongside my technical skills, I've cultivated a positive attitude and
          continually seek to grow in my profession.
        </p>
      </div>
      <div></div>
    </div>
  );
}
