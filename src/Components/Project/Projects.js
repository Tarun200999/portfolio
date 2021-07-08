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
								tech={["Meteor JS", "MongoDB", "Bootstrap"]}
								link={[
									"https://organize-todo.herokuapp.com/",
									"Todo",
								]}
								glink={[
									"https://github.com/Tarun200999/OrganizeTodo",
									"Todo",
								]}
								description="It is a task management app in which user is able to add / remove / edit todo and also able to add subtodo's to each todo.The app also has feature of adding collabrator , user can add callabrator by sending request."
							/>
							<ProjectData
								name="Password Generator"
								tech={["React JS", "Bootstrap"]}
								link={[
									"https://tarun200999.github.io/passwordgenerator035/",
									"Password Generator",
								]}
								glink={[
									"https://github.com/Tarun200999/passwordgenerator",
									"Password Generator",
								]}
								description="This app is to generator a random password according to user requirement.User can choose length of password or charactor set."
							/>
							<ProjectData
								name="Excel Clone"
								tech={["Jquery", "HTML", "Css", "javascript"]}
								link={[
									"https://tarun200999.github.io/Excel_Clone/",
									"Excel Clone",
								]}
								glink={[
									"https://github.com/Tarun200999/Excel_Clone",
									"Excel Clone",
								]}
								description="This a Excel Clone using javascript , HTML , css and jquery . It is only UI and feature like multiple cell select , removing renaming deleting sheet , bold italic underline text color background color change , User can switch betwwen sheets, Speech to text and text to speech is added."
							/>
						</div>
						<div className="col-sm-6">
							<ProjectData
								name="Todo ( REACT + FIREBASE ) "
								tech={["React JS", "Firebase"]}
								link={[
									"https://todoapp-8abec.web.app/",
									"React App",
								]}
								glink={[
									"https://github.com/Tarun200999/TodoApp_REACT-FIREBASE",
									"React App",
								]}
								description="This is Todo app with add / remove / edit option and Dark Mode."
							/>
							<ProjectData
								name="Shopping Cart"
								tech={[
									"Node JS",
									"MongoDB",
									"JWT",
									"Express JS",
								]}
								link={[
									"https://shoppingcart035.herokuapp.com/",
									"Shopping Cart",
								]}
								glink={[
									"https://github.com/Tarun200999/ShoppingCART_RESTAPI",
									"Shopping Cart",
								]}
								description="This is a RESTAPI express project .User can authenticate us and add / remove / delete product or shopping cart."
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
