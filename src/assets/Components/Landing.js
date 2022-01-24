import React, { Component } from "react";
import logo_1 from "../img/logo/logo.png";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <div className="header">
        <div className="header__logo-box">
          <img srcset={logo_1} alt="logo" className="header__logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Hi, I'm John Doe</span>
            <span className="heading-primary--sub">I am an IT Specialist</span>
          </h1>
          {/* Place link to your online accesible resume for download */}
          <a
            href="https://github.com/jacksonmoji/Jackson-Mojis-Resume/raw/overleaf-2020-06-25-0047/Jackson_Mojis_Resume.pdf"
            className="btn btn__bicolor--antiquewhite btn--animated"
          >
            {" "}
            Resume{" "}
          </a>
          <a href="#projects" className="btn btn__bicolor--dark btn--animated">
            {" "}
            My Work{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default Landing;
