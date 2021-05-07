import React from "react";
import Tarun from "../../Assets/tarun.jpg";
import "../../Style/sidebar.css";
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
              <li>
                <a href="#hero" class="nav-link scrollto active">
                  <i class="bx bx-home"></i> <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#contactme" class="nav-link scrollto">
                  <i class="bx bx-user"></i> <span>About</span>
                </a>
              </li>
              <li>
                <a href="#resume" class="nav-link scrollto">
                  <i class="bx bx-file-blank"></i> <span>Resume</span>
                </a>
              </li>
              <li>
                <a href="#portfolio" class="nav-link scrollto">
                  <i class="bx bx-book-content"></i> <span>Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#services" class="nav-link scrollto">
                  <i class="bx bx-server"></i> <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#contact" class="nav-link scrollto">
                  <i class="bx bx-envelope"></i> <span>Contact</span>
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
