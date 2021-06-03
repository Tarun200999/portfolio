import React from "react";
import Techokids from "../../Assets/techokids.jfif";
import "./experience.css";
function Experience() {
	return (
		<>
			<div>
				<div className="container">
					<div className="section-title">
						<h2>Experience</h2>
						<h3>that i have ,</h3>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<div className="exp_content">
								<div className="row">
									<div className="col-sm-4">
										<img src={Techokids} />
									</div>
									<div className="col-sm-8">
										<div className="exp_data">
											<h2>Techokids Private Limited</h2>
											<h4>
												Role : Backend Developer Intern
											</h4>
											<h4>Job description</h4>
											<p>
												My work was to create a RESTAPI
												and connect them with the
												FrontEnd .I was working on 3
												projects ( Student dashboard ,
												Teacher dashboard , Admin
												dashboard ). I learn lot of
												things during Internship.
											</p>

											<h4>
												Certificate :{" "}
												<a href="https://drive.google.com/file/d/15Us5PUrAcvrZ9qZbRXraWRDaIfIGvbyi/view?usp=sharing">
													Tarun
												</a>
											</h4>
											<h4>
												LOR :
												<a href="https://drive.google.com/file/d/15Zeb6EVMnOWvoJmMkcLDZW8zGtZJVhwB/view?usp=sharing">
													Tarun
												</a>{" "}
											</h4>
											<h4>
												Duration : 2 months ( Approx ){" "}
											</h4>
											<a href="https://www.techokids.com/">
												Techokids Private Limited
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Experience;
