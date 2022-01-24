import React, { Component } from 'react';
import badge_1 from '../img/front-end.png';
import badge_2 from '../img/back-end.png';
import badge_3 from '../img/tools.png';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="section-tools" id="tools">

        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary heading-secondary--tools">
            Skills
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="tool-box tool-box--floating">
           
              <i className="tool-box__icon icon-basic-webpage-multiple"></i>
              <h3 className="heading-tertiary u-margin-bottom-small"> Front End </h3>    
              <p className="tool-box__text">
                <ul>
                  <li>JavaScript 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>CSS - SASS - HTML - XML 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>React 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Angular 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Bootstrap 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                </ul>
              </p>
            
            </div>
            <div className="badge badge--p1 badge--p1--floating"><img src={badge_1} alt="badge1" /></div>
          </div>

          <div className="col-1-of-3">
            <div className="tool-box tool-box--floating">
              <div className="badge badge--p2"><img src={badge_2}  alt="badge2" /></div>
              <i className="tool-box__icon icon-basic-settings"></i>
              <h3 className="heading-tertiary u-margin-bottom-small"> Back End </h3>    
              <p className="tool-box__text">
              <ul>
                  <li>PHP 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Python 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Java 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>SQL - MySQL / PostgreSQL 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>NoSQL - MongoDB / ElasticSearch 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Redis 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Django 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Laravel 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Magento 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>NodeJs 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                </ul>
              </p>

            </div>
          </div>

          <div className="col-1-of-3">
            <div className="tool-box tool-box--floating">
              <div className="badge badge--p3"><img src={badge_3} alt="badge3" /></div>
              <i className="tool-box__icon icon-basic-gear"></i>
              <h3 className="heading-tertiary u-margin-bottom-small"> Tools </h3>    
              <p className="tool-box__text">
              <ul>
                  <li>AWS 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Git - Github 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>NPM - Yarn 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Linux 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  </li>
                  <li>Apache 
                   &nbsp;
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  </li>
                </ul>
              </p>

            </div>
          </div>

          
        </div>

      </section>

    );
  }
}

export default Skills;