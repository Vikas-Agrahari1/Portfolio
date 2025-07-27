import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Extracurricular activities"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./coding.png"
								alt="coding"
								className="work-image"
							/>
							<div className="work-title">Coding competitions</div>
							<div className="work-subtitle">
								Participant 
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./hackathon.png"
								alt="hackathon"
								className="work-image"
							/>
							<div className="work-title">Hackathons</div>
							<div className="work-subtitle">
								Front-End Devloper
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./volunteer.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Volunteer work</div>
							<div className="work-subtitle">
								Volunteer
							</div>
							<div className="work-duration">2024 - Present</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
