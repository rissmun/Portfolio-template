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
          Honestly, the most creative and fun project I have built so far, the
          satisfaction it gives you to see your character move and interact with
          the environment after you build your code is enormous.
          <br />I found out that when you build a video game the code tends to
          get bigger without you realizing that you have reached line 400, and
          therefore I have learned how important it is to organize the code to
          be as readable and reachable as possible.
        </p>
      </div>

      <div className="col-1 col-xl-3"></div>
    </div>
  );
}
