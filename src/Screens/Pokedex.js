import "../Screens.css";
import React from "react";

import { Description } from "../Pokedex/Description/Description";

import { Images } from "../Pokedex/Images";
import { Lesson } from "../Pokedex/Lesson";
import { Projects } from "../Pokedex/Projects/Projects";
import { BlackBar } from "../Pokedex/Blackbar";

export function Pokedex() {
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
