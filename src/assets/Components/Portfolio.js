import React, { Component } from "react";
import project_p1 from "../img/bantuweb-add-translation.png";
import project_p2 from "../img/portfolio.png";
import {
  FaPython,
  FaAngular,
  FaSass,
  FaJs,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { DiDjango, DiPostgresql, DiAws } from "react-icons/di";

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.portfolio = props.portfolio;
    this.privateRepo = this.privateRepo.bind(this);
  }

  privateRepo() {
    alert("Please request access from Jackson to view the source code.");
  }

  render() {
    return (
      <section className="section-projects" id="projects">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Projects</h2>
        </div>
        <div className="row">
          <div className="col-2-of-4">
            <div className="file">
              <div className="file__side file__side--front">
                <img src={project_p1} alt="Project 1"></img>
              </div>
              <div className="file__side file__side--back file__side--back-1">
                <a href="#" className="btn btn--blue btn--animated">
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="#"
                  className="btn btn--dark btn--animated"
                  onclick={this.privateRepo}
                >
                  <FaGithub />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-2-of-4">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Project Name
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              maximus congue sapien eget fermentum. Donec consectetur eros dui,
              finibus pharetra turpis vestibulum rhoncus. Cras sed consequat
              neque.{" "}
            </p>
            <p className="skills__big">
              <DiAws /> <FaPython /> <DiPostgresql /> <DiDjango /> <FaJs />{" "}
              <FaAngular /> <FaBootstrap />
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-2-of-4">
            <div className="file">
              <div className="file__side file__side--front">
                <img src={project_p2} alt="Portfolio"></img>
              </div>
              <div className="file__side file__side--back file__side--back-1">
                <a href="#" className="btn btn--blue btn--animated">
                  <FaExternalLinkAlt />
                </a>
                <a
                  href="https://github.com/jacksonmoji/portfolio"
                  className="btn btn--dark btn--animated"
                >
                  <FaGithub />{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="col-2-of-4">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Project Name
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              maximus congue sapien eget fermentum. Donec consectetur eros dui,
              finibus pharetra turpis vestibulum rhoncus. Cras sed consequat
              neque.
            </p>
            <p className="skills__big">
              <FaJs /> <FaSass /> <FaReact /> <FaCss3 />
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
