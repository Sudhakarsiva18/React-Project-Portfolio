import React from "react";
import { IconButton } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Sudhakar</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a href="Sudhakar cv.pdf" download="Sudhakar cv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>          
            <br/>
            <span>
              <IconButton href="https://www.linkedin.com/in/sudhakar-s-711aa524b/">
          <LinkedInIcon />
          </IconButton>
          </span>
          <span>
            <IconButton href="">
          <EmailIcon />
          </IconButton>
          </span>
          <span >
            <IconButton href="https://github.com/Sudhakarsiva18">
          <GithubIcon />
          </IconButton>
          </span>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
               HTML, CSS, JS , ReactJs , BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              MySQL 
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span> Java, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;