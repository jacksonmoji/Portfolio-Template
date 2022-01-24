import React, { Component } from "react";

class Experience extends Component {
  constructor(props) {
    super(props);

    this.experience = props.experience;
  }

  render() {
    return (
      <section className="section-experience" id="experience">
        <div className="u-center-text u-margin-bottom-big--about">
          <h2 className="heading-secondary">Experience</h2>
        </div>
        <div class="row timeline">
          <div class="timeline__container timeline__container--right">
            <div class="content">
              <h1>COMPANY NAME</h1>
              <h2>SYSTEMS ENGINEER</h2>
              <h3>01/2019 - Current</h3>
              <p className="paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                maximus congue sapien eget fermentum. Donec consectetur eros
                dui, finibus pharetra turpis vestibulum rhoncus. Cras sed
                consequat neque. Cras vitae egestas metus, a scelerisque nunc.
                Maecenas aliquet commodo libero. Integer molestie dui ut enim
                maximus cursus. Quisque sit amet enim ac orci porttitor
                ullamcorper nec sit amet augue.
              </p>
            </div>
          </div>
          <div class="timeline__container timeline__container--left">
            <div class="content">
              <h1>COMPANY NAME</h1>
              <h2>SYSTEMS ENGINEER</h2>
              <h3>06/2018 - 01/2019</h3>
              <p className="paragraph">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Cras laoreet mattis velit ut
                commodo. Aliquam erat volutpat. Praesent eget consequat mauris,
                in placerat leo. Donec vitae ultricies erat. Aenean suscipit
                volutpat urna, at tristique tellus sollicitudin ut. Donec
                pretium molestie dui et sagittis.
              </p>
            </div>
          </div>
          <div class="timeline__container timeline__container--right">
            <div class="content">
              <h1>OPEN SOFTWARE</h1>
              <h2>ENGINEER INTERN</h2>
              <h3>06/2016 - 03/2017</h3>
              <p className="paragraph">
                Ras laoreet mattis velit ut commodo. Aliquam erat volutpat.
                Praesent eget consequat mauris, in placerat leo. Donec vitae
                ultricies erat. Aenean suscipit volutpat urna, at tristique
                tellus sollicitudin ut. Donec pretium molestie dui et sagittis.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
