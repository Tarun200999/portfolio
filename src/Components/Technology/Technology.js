import React from "react";
import "./technology.css";
import c from "../../Assets/tech/c++.png";
import python from "../../Assets/tech/python.png";
import java from "../../Assets/tech/java.png";
import bs from "../../Assets/tech/bootstrap.png";
import css from "../../Assets/tech/css.png";
import express from "../../Assets/tech/express.png";
import html from "../../Assets/tech/html.png";
import javascript from "../../Assets/tech/javascript.png";
import js from "../../Assets/tech/js.png";
import mongodb from "../../Assets/tech/mongodb.png";
import node from "../../Assets/tech/nodejs.png";
import react from "../../Assets/tech/react.png";
function Technology() {
	return (
		<>
			<div>
				<div className="container">
					<div className="section-title">
						<h2>Technology</h2>
						<h3>I'm familier with ,</h3>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="tech_content">
								<div className="tech_data">
									<img src={css} />
									<h3>Css</h3>
								</div>
								<div className="tech_data">
									<img src={html} />
									<h3>HTML</h3>
								</div>
								<div className="tech_data">
									<img src={javascript} />
									<h3>Javascript</h3>
								</div>
								<div className="tech_data">
									<img src={node} />
									<h3>NodeJS</h3>
								</div>
								<div className="tech_data">
									<img src={bs} />
									<h3>Bootstrap</h3>
								</div>
								<div className="tech_data">
									<img src={express} />
									<h3>Express</h3>
								</div>
								<div className="tech_data">
									<img src={react} />
									<h3>ReactJS</h3>
								</div>
								<div className="tech_data">
									<img src={mongodb} />
									<h3>MongoDB</h3>
								</div>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="tech_content">
								<div className="tech_data">
									<img src={c} />
									<h3>C++</h3>
								</div>
								<div className="tech_data">
									<img src={python} />
									<h3>Python</h3>
								</div>
								<div className="tech_data">
									<img src={java} />
									<h3>Java</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Technology;
