import React from "react";
import "./project.css"
import project1Img from "../assets/project1.png";
import project2Img from "../assets/project2.png";
import project3Img from "../assets/project3.png";
import project4Img from "../assets/project4.png";
import project5Img from "../assets/project5.png";
import project6Img from "../assets/project6.png";


const Projects = () => {
 
  return (
    <div className="project-profile" id="project">
      <div className="project-info">
        <h2>Latest Project</h2>
        <p>
        Here we are my sample Project that learn about System or Task that do.
        i can share to you to make a view. and its show how good in coding.
        </p>
      </div>

      {/* projects */}
      <div className="projects">
            <ul className="projects-list">
                <li>
                   <img src={project1Img} alt="" />
                </li>
                <li>
                    <img src={project2Img} alt="" />
                </li>
                <li>
                    <img src={project3Img} alt="" />
                </li>
                <li>
                   <img src={project4Img} alt="" />
                </li>
                <li>
                   <img src={project5Img} alt="" />
                </li>
                <li>
                  <img src={project6Img} alt="" />
                </li>
            </ul>
      </div>
    </div>
  );
};

export default Projects;
