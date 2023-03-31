import "./home.scss";
import React, { useState, useEffect } from "react";
import img from "../assets/about.png";
import Text from "../components/Text";
function Home1() {
  return (
    <div className="new">
      <div className="container123">
        <div className="left">
          <div className="msg" style={{ paddingBottom: 15 }}>
            <h3>
              Hi There.
              <span className="wave" role="img" aria-labelledby="wave">
                👋
              </span>
            </h3>
          </div>
          <div className="msg">
            <h2>I'M </h2>
            <h2 className="main-name">Pankaj Ravindra Jogale</h2>
          </div>
          <Text />
          {/* <h1>{text}</h1> */}
          <br />
          <div className="bottom">
            <span> LET ME INTRODUCE MYSELF</span>
            <p>
              Hi, my name is <b className="yellow">Pankaj Jogale</b> and I'm
              from Khed,Ratnagiri.
              <br />
              <div className="length">
                I have recently completed
                <b className="yellow">PG Diploma in Advance Computing</b>
                &nbsp;and Engineering in 2020.
              </div>
            </p>
            As a<b className="yellow"> Software </b>developer, I enjoy tackling
            new challenges and continuously expanding my skillset.
            <br />
            <br />I am proficient in
            <b className="yellow"> React JS, </b>
            as well as have knowledge in programming languages such as C and
            Java,
            <b className="yellow"> MySQL and DSA.</b>
            <br />
            <br />I have a passion for working with{" "}
            <b className="yellow">Node.js, Express.js</b> and
            <i>
              <b className="yellow">
                &nbsp; modern Javascript libraries like bootstrap and frameworks
              </b>
            </i>
            &nbsp; like
            <i>
              <b className="yellow"> React.js</b>
            </i>
            <br />
            <br />
            <i>
              I am also interested in exploring areas related to
              <b className="yellow"> Artificial Intelligence.</b>
            </i>
            <br />
          </div>
        </div>

        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
export default Home1;
