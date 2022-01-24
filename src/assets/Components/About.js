import React, { Component } from "react";
import pro_pic_1 from "../img/profile-pic3.png";
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

class About extends Component {
  constructor(props) {
    super(props);

    this.about = props.about;
  }

  render() {
    return (
      <section className="section-about" id="about">
        <div className="u-center-text u-margin-bottom-big--about">
          <h2 className="heading-secondary">About</h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="composition">
              <img
                className="composition__photo composition__photo--p1"
                src={pro_pic_1}
                alt="profile"
              />
            </div>
            <div className="composition__social">
              <ul className="composition composition_list">
                <li className="composition__item">
                  <a href="#" className="composition__link">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="composition__item">
                  <a
                    href="mailto:yourmail@mail.com"
                    className="composition__link"
                  >
                    <FaEnvelope />
                  </a>
                </li>
                <li className="composition__item">
                  <a href="#" className="composition__link">
                    <FaTwitter />
                  </a>
                </li>
                <li className="composition__item">
                  <a href="#" className="composition__link">
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">
              John Snow
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              maximus congue sapien eget fermentum. Donec consectetur eros dui,
              finibus pharetra turpis vestibulum rhoncus. Cras sed consequat
              neque. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Cras laoreet mattis velit ut
              commodo. Aliquam erat volutpat. Praesent eget consequat mauris, in
              placerat leo.
            </p>
            <p className="paragraph">
              Cras laoreet mattis velit ut commodo. Aliquam erat volutpat.
              Praesent eget consequat mauris, in placerat leo. Donec vitae
              ultricies erat. Aenean suscipit volutpat urna, at tristique tellus
              sollicitudin ut. Donec pretium molestie dui et sagittis. Nunc sed
              sapien a risus hendrerit faucibus quis a tortor. Cras vitae
              egestas metus, a scelerisque nunc. Maecenas aliquet commodo
              libero. Integer molestie dui ut enim maximus cursus. Quisque sit
              amet enim ac orci porttitor ullamcorper nec sit amet augue.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
