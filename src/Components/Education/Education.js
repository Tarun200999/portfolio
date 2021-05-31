import React from "react";
import sfs from "../../Assets/sfs.png";
import aps from "../../Assets/aps.png";
import msit from "../../Assets/msit.png";
import "./education.css";
function Education() {
	return (
		<>
			<div>
				<div className="container">
					<div className="section-title">
						<h2>Education</h2>
						<h3></h3>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="edu_content">
								<img src={msit} />
								<div className="edu_data">
									<h6>Graduation</h6>
									<h1>
										Maharaja Surajmal Institute of
										technology
									</h1>
									<div className="row">
										<div className="col-sm-6">
											<h5></h5>
											<h5>2018 - 2022</h5>
										</div>
										<div className="col-sm-6">
											<h5>CGPA - 9.3 </h5>
										</div>
									</div>
								</div>
							</div>
							<div className="edu_content">
								<img src={sfs} />
								<div className="edu_data">
									<h6>12TH </h6>
									<h1>Summer Fields School</h1>
									<div className="row">
										<div className="col-sm-6">
											<h5>2015 - 2017</h5>
										</div>
										<div className="col-sm-6">
											<h5>Per - 82% </h5>
										</div>
									</div>
								</div>
							</div>
							<div className="edu_content">
								<img id="aps" src={aps} />
								<div className="edu_data">
									<h6>10TH</h6>
									<h1>Ascent Public School</h1>
									<div className="row">
										<div className="col-sm-6">
											<h5>2005 - 2015</h5>
										</div>
										<div className="col-sm-6">
											<h5>CGPA - 8.6 </h5>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Education;
