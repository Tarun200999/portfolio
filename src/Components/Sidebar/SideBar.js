import React, { useState, useRef } from "react";
import Tarun from "../../Assets/tarun.jpg";
import "./sidebar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function SideBar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar_top">
          <div className="profile">
            <img src={Tarun} className="img-fluid rounded-circle" />

            <h1>Tarun</h1>
            <div className="socialmedia_links">
              <WhatsAppIcon />
              <GitHubIcon />
              <FacebookIcon />
              <MailIcon />
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
                <a href="#contactme">
                  <span>Contact</span>
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
