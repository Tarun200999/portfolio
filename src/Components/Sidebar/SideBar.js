import React, { useState } from "react";
import Tarun from "../../Assets/tarun.jpg";
import "./sidebar.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

export default function SideBar() {
  const [home, setHome] = useState("");
  const [aboutme, setAbout] = useState("");
  const [technology, setTech] = useState("");
  const [education, setEdu] = useState("");
  const [experience, setExp] = useState("");
  const [projects, setProj] = useState("");
  const [certificates, setCerti] = useState("");
  const [competitive, setComp] = useState("");
  const [contactme, setContact] = useState("");

  const addActiveClass = () => {
    //console.log("Hello", window.location.href);
    const sectionClicked = window.location.hash.slice(1);
    console.log(sectionClicked);
    if (sectionClicked == "home") {
      setAbout("");
      setContact("");
      setHome("sidebar_link_active");
      setTech("");
      setEdu("");
      setExp("");
      setProj("");
      setCerti("");
      setComp("");
      setContact("");
    } else if (sectionClicked == "aboutme") {
      setAbout("sidebar_link_active");
      setContact("");
      setHome("");
      setTech("");
      setEdu("");
      setExp("");
      setProj("");
      setCerti("");
      setComp("");
      setContact("");
    } else if (sectionClicked == "technology") {
      setAbout("");
      setContact("");
      setHome("");
      setTech("sidebar_link_active");
      setEdu("");
      setExp("");
      setProj("");
      setCerti("");
      setComp("");
      setContact("");
    } else if (sectionClicked == "education") {
      setAbout("");
      setContact("");
      setHome("");
      setTech("");
      setEdu("sidebar_link_active");
      setExp("");
      setProj("");
      setCerti("");
      setComp("");
      setContact("");
    } else if (sectionClicked == "experience") {
      setAbout("");
      setContact("");
      setHome("");
      setTech("");
      setEdu("");
      setExp("sidebar_link_active");
      setProj("");
      setCerti("");
      setComp("");
      setContact("");
    } else if (sectionClicked == "projects") {
      setAbout("");
      setContact("");
      setHome("");
      setTech("");
      setEdu("");
      setExp("");
      setProj("sidebar_link_active");
      setCerti("");
      setComp("");
      setContact("");
    } else if (sectionClicked == "certificates") {
      setAbout("");
      setContact("");
      setHome("");
      setTech("");
      setEdu("");
      setExp("");
      setProj("");
      setCerti("sidebar_link_active");
      setComp("");
      setContact("");
    } else if (sectionClicked == "competitive") {
      setAbout("");
      setContact("");
      setHome("");
      setTech("");
      setEdu("");
      setExp("");
      setProj("");
      setCerti("");
      setComp("sidebar_link_active");
      setContact("");
    } else {
      setAbout("");
      setContact("");
      setHome("");
      setTech("");
      setEdu("");
      setExp("");
      setProj("");
      setCerti("");
      setComp("");
      setContact("sidebar_link_active");
    }
  };

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
              <li id="sidebar_home" onClick={() => addActiveClass()}>
                <a href="#home" className={home}>
                  <span>Home</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
                <a href="#aboutme" className={aboutme}>
                  <span>About</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
                <a href="#technology" className={technology}>
                  <span>Technology</span>
                </a>
              </li>
              <li onClick={async () => await addActiveClass()}>
                <a href="#education" className={education}>
                  <span>Education</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
                <a href="#experience" className={experience}>
                  <span>Experience</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
                <a href="#projects" className={projects}>
                  <span>Projects</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
                <a href="#certificates" className={certificates}>
                  <span>Certificates</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
                <a href="#competitive" className={competitive}>
                  <span>Competitive</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
                <a href="#contactme" className={contactme}>
                  <span>Contact</span>
                </a>
              </li>
              <li onClick={() => addActiveClass()}>
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
