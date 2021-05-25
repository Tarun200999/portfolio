import React from "react";
import Tarun from "../../Assets/tarun.jpg";
import "./home.css";

function Home() {
	return (
		<>
			<div className="home_content">
				<div className="container">
					<a href="https://drive.google.com/file/d/18rPFjTwjEwH10_mYlJMWNm1lfcwr1YsM/view?usp=sharing">
						<span className="home_resume_button">Resume Here</span>
					</a>
					<div className="row">
						<div className="col-sm-8">
							<div className="display_name">
								<h1>Tarun</h1>
								<h3>Web Developer | 3rd Year Student</h3>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="profile_photo">
								<img
									src={Tarun}
									width="250px"
									height="250px"
									className="home_img_rounded_circle"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
