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
          In this project, I learned how important is to minimize the amount of
          hard code, which is gonna help in the long run.
          <br />I also found how many great things you can find and use with
          React like the Web Speech API.
        </p>
      </div>

      <div className="col-1 col-xl-3"></div>
    </div>
  );
}
