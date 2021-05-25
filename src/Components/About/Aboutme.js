import React from "react";
import "./aboutme.css";

function Aboutme() {
  const greeting = () => {
    var today = new Date();
    var curHr = today.getHours();

    if (curHr < 12) {
      return "Good Morning";
    } else if (curHr < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };
  return (
    <>
      <div class="container">
        <div className="section-title">
          <h2>ABOUT</h2>
          <h3>me ,</h3>
        </div>
        <div class="row">
          <div className="col-lg-12">
            <h3>Hello, {greeting()}</h3>
            <p>
              My name is Tarun , I am passinate about software devolpement and
              innovations , I believe in powering community by making good
              products..
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li>DOB 20 ,9 ,1999</li>
            </ul>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
