import React from "react";
import leetcode from "../../Assets/leetcode.png";
import star from "../../Assets/star.png";
import codechef from "../../Assets/codechef.png";
import hackerrank from "../../Assets/hackerrank.png";
import "./cp.css";

function Competitive() {
  return (
    <>
      <div>
        <div className="container">
          <div className="section-title">
            <h2>Data Structure</h2>
            <h3>Algorithm,</h3>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="dsa_content">
                <img src={leetcode} />
                <div className="dsa_data">
                  <h3>Rating</h3>
                  <div className="rating_data">
                    <h3>3.5 Star</h3>
                    <a href={"https://leetcode.com/tk4977163/"} target="_blank">
                      Leetcode
                    </a>
                  </div>
                </div>{" "}
              </div>
              <div className="dsa_content">
                <img src={codechef} />
                <div className="dsa_data">
                  <h3>Rating</h3>
                  <div className="rating_data">
                    <h3>3 star</h3>
                    <a
                      href={"https://www.codechef.com/users/tarun_03596"}
                      target="_blank"
                    >
                      Codechef
                    </a>
                  </div>
                </div>{" "}
              </div>
            </div>
            <div className="col-sm-6">
              <div className="dsa_content">
                <img src={hackerrank} />
                <div className="dsa_data">
                  <h3>Rating</h3>
                  <div className="rating_data">
                    <h3>5 star</h3>
                    <a
                      href={"https://www.hackerrank.com/Tarun035"}
                      target="_blank"
                    >
                      Hackerrank
                    </a>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Competitive;
