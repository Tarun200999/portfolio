import React from "react";

function ProjectData({ name, tech, link, glink, description }) {
	return (
		<>
			<div className="project_content">
				<h2>{name}</h2>
				<h4>
					{tech.map((i) => (
						<span className="tech_used">{i}</span>
					))}
				</h4>
				<h4>Description :</h4>
				<p>{description}</p>
				<h5>
					Project Link{" "}
					<a href={link[0]} target="_blank">
						{link[1]}
					</a>
				</h5>
				<h5>
					Github Link{" "}
					<a href={glink[0]} target="_blank">
						{glink[1]}
					</a>
				</h5>
			</div>
		</>
	);
}

export default ProjectData;
