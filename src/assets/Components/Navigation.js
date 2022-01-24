import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.NavigationData = props.NavigationData;
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    document.getElementById('navi-toggle').checked = false;
  }

  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
        <label for="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#about" className="navigation__link" onClick={this.handleClick}>About</a></li>
            <li className="navigation__item"><a href="#education" className="navigation__link" onClick={this.handleClick}>Education</a></li>
            <li className="navigation__item"><a href="#experience" className="navigation__link" onClick={this.handleClick}>Experience</a></li>
            <li className="navigation__item"><a href="#tools" className="navigation__link" onClick={this.handleClick}>Skills</a></li>
            <li className="navigation__item"><a href="#projects" className="navigation__link" onClick={this.handleClick}>Projects</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation;