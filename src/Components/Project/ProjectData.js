import React from "react";

function ProjectData({ name, tech, link, glink }) {
	return (
		<>
			<div className="project_content">
				<h2>{name}</h2>
				<h4>
					Tech Used
					{tech.map((i) => (
						<span className="tech_used">{i}</span>
					))}
				</h4>
				<h4>
					Project Link <a href={link[0]}>{link[1]}</a>
				</h4>
				<h4>
					Github Link <a href={glink[0]}>{glink[1]}</a>
				</h4>
			</div>
		</>
	);
}

export default ProjectData;
