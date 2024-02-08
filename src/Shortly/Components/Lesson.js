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
          I could spend all day discussing the lessons I learned while working
          on this project. I've spent hours debugging, and the most important
          lesson was about code structure and organization.
          <br />
          <br />
          As the function handling the achievements' logic expanded, I found
          myself just adding bits of code here and there to make things work.
          Now, I dedicate considerably more time to refactoring and improving
          each line of code I write for optimal readability, leading to far
          fewer headaches. Most importantly, I prioritize creating functions and
          reusing them to save space, making each file cleaner and more easily
          debuggable for other developers.
        </p>
      </div>

      <div className="col-1 col-xl-3"></div>
    </div>
  );
}
