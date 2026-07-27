import React, { useState,useRef,useEffect } from "react";
import "./App.css";
import IOTProject from "./images/TollPlaza.jpeg"
import Ecommerce from "./images/Ecommerce.png"
import profilePic from "./images/profile.jpg";
import reactLogo from "./images/react-logo.png";
import javaLogo from "./images/java-logo.png";
import sqlLogo from "./images/sql-logo.png";
import htmlLogo from "./images/html-logo.png";
import cssLogo from "./images/css-logo.png";
import springlogo from "./images/springboot.jpg"
import IOTlogo from "./images/IOT.jpg"
import BootstrapLogo from "./images/Bootstrap.png"
import DSALogo from "./images/DSA.jpg"
import GITLogo from "./images/GIT.jpg"
import certificate1 from "./images/certificates/certificate1.jpg";
import certificate2 from "./images/certificates/certificate2.jpg";
import certificate3 from "./images/certificates/certificate3.jpg";
import certificate4 from "./images/certificates/certificate4.jpg";
import certificate5 from "./images/certificates/certificate5.jpg";
import "./About.js";
import SkillCircle from "./SkillCircle";
import ContactForm from "./components/ContactForm";


function App() {
  const [isOpen, setIsOpen] = useState(false);
   const [animateSkills, setAnimateSkills] = useState(false);
   const skillsRef = useRef(null);
   const [selectedCert, setSelectedCert] = useState(null);
   
const certificates = [
  { image: certificate1, issuer: "MasterMind Tech" },
  { image: certificate2, issuer: "Giri's TechHub" },
  { image: certificate3, issuer: "NMSKAAR Infotech" },
  { image: certificate4, issuer: "Infosys Springboard" },
  { image: certificate5, issuer: "IIRS" }
];

   useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        setAnimateSkills(true);   // start animation when visible
      } else {
        setAnimateSkills(false);  // reset when not visible
      }
    },
    { threshold: 0.3 }
  );

  if (skillsRef.current) {
    observer.observe(skillsRef.current);
  }

  return () => {
    
    if (skillsRef.current) {
      observer.unobserve(skillsRef.current);
    }
  };
}, []);

  return (
    <div className="App">
      <header>
  <button 
    className="menu-toggle" 
    onClick={() => setIsOpen(!isOpen)}
  >
    ☰
  </button>
</header>
        {/* Navigation links */}
        <nav className={isOpen ? "open" : ""}>
          <div className="nav-name">Vaishnavi Rokade</div>
          <div className="nav-links">
             <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Education">Education</a>
             <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#certificates">Certificates</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
     
<section id="Home">
  <div className="content">
    <div className="info-section">
      <h4>Hello</h4>
      <h4>I am Vaishnavi Rokade</h4>
      <p>Computer Engineering Student | Java Full Stack Developer</p>

      {/* Resume Download Button */}
      <a href="/resume.pdf" download="Vaishnavi_Rokade_Resume.pdf">
        <button className="resume-btn">Download Resume</button>
      </a>
    </div>

    <img src={profilePic} alt="Profile" className="profile-pic" />
  </div>
</section>

     <section id="About" className="About-section">
     <div className="About-me">
      About Me
     </div>
        <div className="About-info">
          Hi I am Vaishnavi Rokade industry-ready,final-year engineering student passionate about converting
           complex problems into clean,scalable software solutions.Equipped with a strong 
           full-stack foundation,I amm fully prepared to join a development team and drive 
           immediate value.Strong command on oops concepts,java,sql,DBMS. 
        </div>
         <section id="Education">
      <div className="About-me">
        Education
      </div>
      <div className="Education-container">
       <div className="education-card-container">
       <div className="year">
        2023-2027<br/>
        <div className="Degree">Bachelor of Technology in Computer Science and Engineering</div>
        <div className="edu-info">Karmaveer Bhaurao Patil College Of Engineering Satara.</div>
       </div>
       <div className="cgpa">
        CGPA: 8.0
       </div>
       </div>
       <div className="education-card-container">
        <div className="year">
        2021-2023<br/>
        <div className="Degree">Higher Secondary Certificate (HSC) - PCMB</div>
         <div className="edu-info">Yashwantrao Chavan Institute Of Science Satara</div>
         <div className="cgpa">
        Percentage: 60.67%
       </div>
       </div>
       </div>
       <div className="education-card-container">
         <div className="year">
        2019-2021<br/>
         </div>
        <div className="Degree">Secondary School Certificate (SSC)</div>
         <div className="edu-info">Karmaveer Bhaurao Patil Vidyalaya Bhuinj,Branch School Jamb</div>
         <div className="cgpa">
        Percentage: 95%
       </div>
       </div>
      </div>
     </section>
     </section>
  <section id="skills" ref={skillsRef}>
  <div className="About-me">Technical Skills</div>
  <div className="skills-container">
   <SkillCircle skill="React" percentage={70} animate={animateSkills} logo={reactLogo} />
<SkillCircle skill="Java" percentage={85} animate={animateSkills} logo={javaLogo} />
<SkillCircle skill="SQL" percentage={75} animate={animateSkills} logo={sqlLogo} />
<SkillCircle skill="HTML" percentage={90} animate={animateSkills} logo={htmlLogo} />
<SkillCircle skill="CSS" percentage={90} animate={animateSkills} logo={cssLogo} />
<SkillCircle skill="springboot" percentage={60} animate={animateSkills} logo={springlogo} />
<SkillCircle skill="IOT" percentage={85} animate={animateSkills} logo={IOTlogo} />
<SkillCircle skill="Bootstrap" percentage={75} animate={animateSkills} logo={BootstrapLogo} />
<SkillCircle skill="DSA" percentage={80} animate={animateSkills} logo={DSALogo} />
<SkillCircle skill="GIT" percentage={60} animate={animateSkills} logo={GITLogo} />

  </div>
</section>
<section id="projects">
<div className="About-me">Projects</div>

  
  <div className="project-container">

  
    <div className="project-card">
     <img src={Ecommerce} alt="Profile" />
      <h3>Ecommerce Platform</h3>
      <p>E‑Commerce Platform developed using HTML, CSS, JavaScript frontend and Spring Boot Java backend, featuring product catalog, user authentication, cart/checkout flow, and admin CRUD operations.</p>
      <div className="project-links">
        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://yourliveprojectlink.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>

    
    <div className="project-card">
   <img src={IOTProject} alt="Profile" />
      <h3>Smart Toll Plaza: Fastag Detection and Lane Optimization</h3>
      <p>IOT Project : Working with Arduino, RFID, IR sensors, LCD, DFPlayer Mini, and C/C++, along with FASTag detection, successful balance checking, lane monitoring, and audio feedback.</p>
      <div className="project-links">
        <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/posts/vaishnavirokade04_arduino-iot-automation-ugcPost-7470823868618919936-TyHl/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEUT1QMBW4HYd3lftE_xGZLwF3H62CGnfoM" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>

  </div>
</section>
<section id="certificates">
  <div className="About-me">Certificates</div>
  <div className="certificate-container">
    {certificates.map((cert, index) => (
      <div className="certificate-card" key={index}>
        <img
          src={cert.image}
          alt={`Certificate ${index + 1}`}
          className="certificate-thumbnail"
          onClick={() => setSelectedCert(cert.image)}
        />
        <h3>Certificate {index + 1}</h3>
        <p>Issued by: {cert.issuer}</p>
      </div>
    ))}
  </div>

  {selectedCert && (
    <div className="modal">
      <span className="close" onClick={() => setSelectedCert(null)}>✖</span>
      <img className="modal-image" src={selectedCert} alt="Certificate" />
    </div>
  )}
</section>


<section id="contact">
  <div className="About-me">Contact Me</div>
  <ContactForm />

  {/* Social Icons */}
  <div className="contact-icons">
    <a href="mailto:vaishnavirokade04@gmail.com" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-envelope"></i>
    </a>
    <a href="https://www.linkedin.com/in/vaishnavirokade04" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
    <a href="tel:+919730929665" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-phone"></i>
    </a>
  </div>

  <p className="footer">© 2026 Created by Vaishnavi Rokade</p>
</section>

    </div>
  );
}

export default App;
