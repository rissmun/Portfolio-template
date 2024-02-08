import React from "react";
export function Skills() {
  return (
    <div style={{ marginTop: "4rem" }}>
      <div className="col-12 " style={{ marginLeft: -20 }}>
        <h3 style={{ marginBottom: "1rem" }}>My Skills</h3>
        <p>
          Through my studies, starting with React, I've gained a good understanding of computer
          science and web development concepts,and from different work
          experiences, I learned new languages such as PHP and new systems such
          as WordPress and woocommerce.
        </p>
      </div>
      <div
        style={{
          fontSize: 19,
          width: "80%",
          marginTop: 90,
          marginBottom: "5rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>HTML & CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
        </div>
        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>SCSS</li>
          <li>React</li>
          <li>Tailwind</li>
        </div>

        <div style={{ margin: "-20px 10px -20px 10px" }}>
          <li>PHP</li>
          <li>WordPress</li>
          <li>WooCommerce</li>
        </div>
      </div>
    </div>
  );
}
