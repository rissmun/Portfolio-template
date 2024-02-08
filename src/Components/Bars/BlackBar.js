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
          paddingBottom: 80,
          alignItems: "flex-end",
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
            href="tel:+460760477038"
          >
            +46 076-047 70 38
          </a>
        </div>
        <div className="col-xl" style={{ margin: 20 }}>
          {" "}
          <a
            href="https://www.linkedin.com/in/gianluca-quaranta-2a7429210/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="col-1 col-xl-2 "></div>
    </div>
  );
}
