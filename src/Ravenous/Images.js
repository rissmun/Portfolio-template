import React from "react";

export function Images() {
  return (
    <div className="row paragraph" style={{ marginTop: 100 }}>
      <div className="col-1 col-xl-2"></div>
      <div className="col-5 col-xl-4">
        <div style={{ width: "90%" }} className="shadow">
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/757628305485725837/ravenous.png"
          />
        </div>

        <div className="shadow" style={{ width: "90%", marginTop: 100 }}>
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/757679186138890280/ravenous3.png"
          />
        </div>
      </div>
      <div className="col-5 col-xl-4">
        <div
          className="shadow"
          style={{
            width: "70%",
            marginTop: -25
          }}
        >
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/757679883425021982/ravenousCel.png"
          />
        </div>
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
