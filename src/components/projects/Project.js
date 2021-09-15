import React from "react";
import "./Project.css";
import Orgs from "./organizations";
import leftLogo from "../../assets/projectAssests/winter_about.png";

const Project = () => {
  return (
    <section id="projects">
      <div id="flex-container">
        <div class="left">
          <img src={leftLogo} alt="Image" />
        </div>
        <div className="right">
          <ul class="list">
            <li class="items">
              <h2>10+</h2>
              <br />
              Projects
            </li>
            <li class="items">
              <h2>150+</h2>
              <br />
              Hackers All Around
            </li>
            <li class="items">
              <h2>30+</h2>
              <br />
              Day Event
            </li>
          </ul>
          <div className="top"></div>
          <Orgs />
          <button>
            <a href="#">PROJECTS</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
