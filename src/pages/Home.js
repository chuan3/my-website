import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Jefferson</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              HTML/HTML5, CSS/CSS3, Sass/Less, JavaScript(ES6), jQuery,
              Bootstrap, React JS, Angular, Spring Boot, JSON, AJAX, Redux
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>TypeScript, Node.js, Java, Spring Boot ,MySQL, Oracle</span>
          </li>
          <li className="item">
            <h2>Programing Languages</h2>
            <span>Java, JavaScript,TypeScript, Swift, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
