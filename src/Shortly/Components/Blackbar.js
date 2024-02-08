import React from "react";

export function BlackBar() {
  return (
    <div className="row" style={{ backgroundColor: "hsl(0, 0%, 9%)" }}>
      <div className="col-1 col-xl-2 "></div>
      <div
        id="contact"
        className="col-xl-8 col-12 "
        style={{
          color: "white",
          marginTop: 40,
          fontSize: 18,
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          textAlign: "center",
          paddingBottom: 80
        }}
      >
        <div className="col-xl " style={{ margin: 20 }}>
          <a
            className="contact"
            style={{ textDecoration: "none", color: "white" }}
            href="mailto:gianlucaquaranta92@gmail.com"
          >
            gianlucaquaranta92@gmail.com
          </a>
        </div>
        <div className="col-xl " style={{ margin: 20 }}>
          <a
            className="contact"
            style={{ textDecoration: "none", color: "white" }}
            href="tel:"
          >
            +46 076-047 70 38
          </a>
        </div>
        <div className="col-xl" style={{ margin: 20 }}>
          {" "}
          <a
            href="https://github.com/gianlucaquaranta92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="git"
              style={{ width: 50, marginTop: -10, backgroundColor: "white" }}
              alt=""
              src="https://cdn.discordapp.com/attachments/165746589309206528/757558222235369574/gitlogo.png"
            />
          </a>
        </div>
      </div>
      <div className="col-1 col-xl-2 "></div>
    </div>
  );
}
