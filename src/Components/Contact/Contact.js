import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import "./contact.css";

function Contact() {
	return (
		<>
			<div>
				<div className="container">
					<div className="section-title">
						<h2>Contact</h2>
						<h3>me ,</h3>
					</div>
					<div className="row">
						<div className="col-lg-12">
							<div className="contact_content">
								<h3>
									<span id="mobile">Mobile No :</span>{" "}
									9891803018
								</h3>
								<h3>
									<span id="email">Email</span> :
									tk4977163@gmail.com
								</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
