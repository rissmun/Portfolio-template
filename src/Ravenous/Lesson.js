import React from "react";

export function Lesson() {
  return (
    <div className="row ">
      <div className="col-1 col-xl-3"></div>
      <div
        className="col-10 col-xl-6"
        style={{ textAlign: "center", marginBottom: 200 }}
      >
        <h3 style={{ marginTop: 100, marginBottom: 50 }}>lessons learned</h3>
        <p>
          This project helped to solidify my React knowledge such as updating
          the states.
          <br />I learned how hard and important can be the syntax which got me
          back on review few concepts in the middle of the project for a deeper
          understanding of what I was doing.
        </p>
      </div>

      <div className="col-1 col-xl-3"></div>
    </div>
  );
}
