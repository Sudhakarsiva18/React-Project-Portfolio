import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import { IconButton } from "@mui/material";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="noimage"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <IconButton href={project.links}>
      <GithubIcon />
      </IconButton>
    </div>
  );
}

export default ProjectDisplay;