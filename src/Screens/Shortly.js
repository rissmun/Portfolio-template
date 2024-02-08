import React from "react";
import "../Screens.css";
import { Description } from "../Shortly/Components/Description/Description";
import { Images } from "../Shortly/Components/Images";
import { Lesson } from "../Shortly/Components/Lesson";
import { Projects } from "../Shortly/Components/Projects/Projects";
import { BlackBar } from "../Shortly/Components/Blackbar";

export function Shortly() {
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

