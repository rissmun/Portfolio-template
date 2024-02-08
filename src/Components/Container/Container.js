import React from "react";
import { About } from "./About";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { ProvideValues } from "./ProvideValues";

export function Container() {
  return (
    <div>
      <div
        className="row shadoww "
        style={{
          /*backgroundImage:
            "linear-gradient( rgba(50, 180, 220),rgba(0, 120, 220))",*/
          backgroundColor: "white",
        }}
      >
        <div className="col" />

        <div
          className="col-10  col-xl-9 col-lg-11 col-md-11 col-sm-10"
          style={{ backgroundColor: "" }}
        >
          <About />
          <ProvideValues />
          <Projects />
          <Skills />
        </div>

        <div className="col " />
      </div>
    </div>
  );
}
