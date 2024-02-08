import React from "react";

export function Problems() {
  return (
    <div className="row ">
      <div style={{display: "flex", alignItems:"center"}} className=" col-xl-6 col-lg-6">
        <img
          style={{ width: "100%" }}
          src="https://i.ibb.co/YRHcFNT/artkampen-gif.gif"
          alt=""
        />
      </div>
      <div className=" col-xl-6 col-lg-6">
        <h3 style={{ marginBottom: 50 }}>Problems and Thought Process</h3>
        <p>
          The achievements get registered in custom fields related to the user
          profile, and they are based on the fish catch registration by the
          user. There are three different fields to fill in the registration.
          <br />
          <br />
          Based on those inputs i had to update the custom fields of the
          users,until they reach the requirements of the objectives in order to
          unlock the achievements medals and prizes connected to it.
          <br />
          The workload was quite significant so I had to methodically plan out
          all the logic phases to get an efficient step-by-step workflow.
        </p>
      </div>
    </div>
  );
}
