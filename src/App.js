import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import Aboutme from "./Components/About/Aboutme";
import Technology from "./Components/Technology/Technology";
import Education from "./Components/Education/Education";
import Projects from "./Components/Project/Projects";
import Certificates from "./Components/Certificate/Certificates";
import Competitive from "./Components/Competitive/Competitive";
import Contact from "./Components/Contact/Contact";
import Experience from "./Components/Experience/Experience";

function App() {
  return (
    <>
      <header id="header">
        <SideBar />
      </header>
      <section id="home"></section>
      <main id="main">
        <section id="aboutme">
          <Aboutme />
        </section>
        <section id="technology">
          <div className="check">
            <Technology />
          </div>
        </section>
        <section id="education">
          <div className="check">
            <Education />
          </div>
        </section>
        <section id="experience">
          <div className="check">
            <Experience />
          </div>
        </section>
        <section id="projects">
          <div className="check">
            <Projects />
          </div>
        </section>
        <section id="certificates">
          <div className="check">
            <Certificates />
          </div>
        </section>
        <section id="competitive">
          <div className="check">
            <Competitive />
          </div>
        </section>
        <section id="contactme">
          <div className="check">
            <Contact />
          </div>
        </section>
      </main>
    </>
  );
}
export default App;
