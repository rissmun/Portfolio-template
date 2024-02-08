import React from "react";
import "../Screens.css";
import { Description } from "../Santas/Description/Description";
import { Images } from "../Santas/Images";
import { Lesson } from "../Santas/Lesson";
import { Projects } from "../Santas/Projects/Projects";
import { BlackBar } from "../Santas/Blackbar";

export function Santas() {
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
