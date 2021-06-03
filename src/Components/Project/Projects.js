import React from "react";
import "./project.css";
import ProjectData from "./ProjectData";

function Projects() {
	return (
		<>
			<div>
				<div className="container">
					<div className="section-title">
						<h2>Projects</h2>
						<h3>By me,</h3>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<ProjectData
								name="Task Management App"
								tech={["MeteorJS", "MongoDB", "Bootstrap"]}
								link={[
									"https://organize-todo.herokuapp.com/",
									"Todo",
								]}
								glink={[
									"https://github.com/Tarun200999/OrganizeTodo",
									"Todo",
								]}
							/>
							<ProjectData
								name="Password Generator"
								tech={["ReactJS", "Bootstrap"]}
								link={[
									"https://tarun200999.github.io/passwordgenerator035/",
									"Password Generator",
								]}
								glink={[
									"https://github.com/Tarun200999/passwordgenerator",
									"Password Generator",
								]}
							/>
						</div>
						<div className="col-sm-6">
							<ProjectData
								name="Todo ( REACT + FIREBASE ) "
								tech={["ReactJS", "Firebase"]}
								link={[
									"https://todoapp-8abec.web.app/",
									"React App",
								]}
								glink={[
									"https://github.com/Tarun200999/TodoApp_REACT-FIREBASE",
									"React App",
								]}
							/>
							<ProjectData
								name="Shopping Cart"
								tech={["NodeJS", "MongoDB", "JWT", "ExpressJS"]}
								link={[
									"https://shoppingcart035.herokuapp.com/",
									"Shopping Cart",
								]}
								glink={[
									"https://github.com/Tarun200999/ShoppingCART_RESTAPI",
									"Shopping Cart",
								]}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
