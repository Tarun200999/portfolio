import React from "react";
import Tarun from "../../Assets/tarun.jpg";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./home.css";

function Home({ sidebar, setSidebar }) {
  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log(sidebar);
  };
  return (
    <>
      <div className="home_content">
        <div className="container">
          <a href="https://drive.google.com/drive/folders/186HOyGhWB-of5Qd-2RPVP60gg50a3zLw?usp=sharing">
            <span className="home_resume_button">Resume</span>
          </a>
          <div className="row">
            <div className="col-sm-8">
              <div className="display_name">
                <h1>Tarun</h1>
                <h3>MERN Stack Developer | Coder </h3>
              </div>
              <div className="home_social_links">
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
            <div className="col-sm-4">
              <div className="profile_photo">
                <img
                  src={Tarun}
                  width="200px"
                  height="200px"
                  className="home_img_rounded_circle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
