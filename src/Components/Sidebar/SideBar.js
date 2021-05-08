import React from "react";
import Tarun from "../../Assets/tarun.jpg";
import "./sidebar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function SideBar() {
  //console.log("data", document.scrollIntoView());
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
                <a href="#home" class="nav-link scrollto">
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#aboutme" class="nav-link scrollto">
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="#technology" class="nav-link scrollto">
                  <span>Technology</span>
                </a>
              </li>
              <li>
                <a href="#education" class="nav-link scrollto">
                  <span>Education</span>
                </a>
              </li>
              <li>
                <a href="#experience" class="nav-link scrollto">
                  <span>Experience</span>
                </a>
              </li>
              <li>
                <a href="#projects" class="nav-link scrollto">
                  <span>Projects</span>
                </a>
              </li>
              <li>
                <a href="#certificates" class="nav-link scrollto">
                  <span>Certificates</span>
                </a>
              </li>
              <li>
                <a href="#competitive" class="nav-link scrollto">
                  <span>Competitive</span>
                </a>
              </li>
              <li>
                <a href="#contactme" class="nav-link scrollto">
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="sidebar_bottom"></div>
      </div>
    </>
  );
}
