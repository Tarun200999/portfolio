import React, { useState, useRef } from "react";
import Tarun from "../../Assets/tarun.jpg";
import "./sidebar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_top">
          <div className="profile">
            <img src={Tarun} className="img-fluid rounded-circle" />
            <h1>Tarun</h1>
            <div className="socialmedia_links">
              <WhatsAppIcon
                onClick={() =>
                  window.open(
                    "https://wa.me/?text=Hi%20Tarun",
                    "",
                    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480"
                  )
                }
              />

              <GitHubIcon
                onClick={() =>
                  window.open(
                    "https://github.com/Tarun200999",
                    "",
                    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480"
                  )
                }
              />
              <FacebookIcon />
              <MailIcon
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=tk4977163@gmail.com&su=SUBJECT&body=Your Message",
                    "",
                    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480"
                  )
                }
              />
              <LinkedInIcon
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/tarun-459a68171/",
                    "",
                    "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=350,width=480"
                  )
                }
              />
            </div>
          </div>
        </div>
        <div className="sidebar_links">
          <nav id="navbar" class="nav-menu navbar">
            <ul>
              <li id="sidebar_home">
                <a href="#home">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#aboutme">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#technology">
                  <span>Technology</span>
                </a>
              </li>
              <li>
                <a href="#education">
                  <span>Education</span>
                </a>
              </li>
              <li>
                <a href="#experience">
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#certificates">
                  <span>Certificates</span>
                </a>
              </li>
              <li>
                <a href="#competitive">
                  <span>Competitive</span>
                </a>
              </li>

              <li>
                <div className="resume_button">
                  <a href="https://drive.google.com/file/d/18rPFjTwjEwH10_mYlJMWNm1lfcwr1YsM/view?usp=sharing">
                    <span className="sidebar_resume_button">Resume Here</span>
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar_bottom"></div>
      </div>
    </>
  );
}
