import React from "react";
import "../Screens.css";

import { Description } from "../Ravenous/Description/Description";

import { Images } from "../Ravenous/Images";
import { Lesson } from "../Ravenous/Lesson";
import { Projects } from "../Ravenous/Projects/Projects";
import { BlackBar } from "../Ravenous/Blackbar";

export function Ravenous() {
  return (
    <div>
      <Description />

      <Images />
      <Lesson />
      <Projects />
      <BlackBar />
    </div>
  );
}
