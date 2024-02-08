import React from "react";

export function Images() {
  return (
    <div className="row paragraph" style={{ marginTop: 100 }}>
      <div className="col-1 col-xl-2"></div>
      <div className="col-5 col-xl-4">
        <div className="shadow">
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/757954473862627379/venosaur.png"
          />
        </div>
      </div>
      <div className="col-5 col-xl-4">
        <div
          className="shadow"
          style={{
            width: "70%",
            marginTop: -35,
            marginLeft: 20
          }}
        >
          <img
            style={{ width: "100%" }}
            alt=""
            src="https://cdn.discordapp.com/attachments/165746589309206528/757951545319882842/charizard.png"
          />
        </div>
      </div>
      <div className="col-1 col-xl-2"></div>
    </div>
  );
}
