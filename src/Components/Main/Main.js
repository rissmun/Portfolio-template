import React from "react";

export function Main() {
  return (
    <div
      className="container-fluid "
      style={{
        backgroundColor: "",
        marginTop: "5rem",

        /* backgroundImage:
          "URL(https://cdn.discordapp.com/attachments/165746589309206528/746685102175813693/pattern_background3.png)"*/
      }}
    >
      <div style={{ marginTop: 20 }} className="row">
        <div className="col" />
        <div
          style={{ margin: "auto" }}
          className="col-xl-5  col-lg-12 col-md-12  col-sm-12 title"
        >
          <h2 style={{ fontSize: 24, marginBottom: 22 }}></h2>
          <h1
            style={{
              color: "",
              marginTop: -10,
              marginBottom: 16,
              fontWeight: 600,
            }}
          >
            Hey there,<span style={{ color: "orange" }}> I'm Rissmun</span>
            <br /> Web developer with a deep passion for Front-End
          </h1>

          <div style={{ marginTop: 32, marginBottom: 40 }}>
            <a
              style={{ marginRight: 16 }}
              className="buttonBlack"
              href="#contact"
            >
              Contact me
            </a>
            <a className="buttonWhite" href="#projects">
              See my work
            </a>
          </div>
          {/*}  <span style={{ color: "coral", fontSize: 35, fontWeight: "bold" }}>
            developer
          </span>
          {*/}
        </div>

        <div
          className="col-xl-4 "
          style={{ marginBottom: 50, textAlign: "center" }}
        >
          <img
            className="foto"
            style={{ marginTop: 0 }} //backgroundImage:'URL(https://rel.ink/kXWQKe)'}}
            alt=""
            src="https://cdn.discordapp.com/attachments/1160300154184810660/1205288506910576690/png-transparent-anime-lucky-star-manga-4chan-fansub-anime-purple-child-violet_1.png?ex=65d7d365&is=65c55e65&hm=c0c60e7f9024456553f03e400ce703b6afaa2d34449cff979fe2edd8b88e0e2e&"
          />
        </div>
        <div className="col" />
      </div>
    </div>
  );
}
