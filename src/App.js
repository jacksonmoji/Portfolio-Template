import React, { Component } from "react";
//import Loader from "./assets/Components/Loader";
import About from "./assets/Components/About";
import Navigation from "./assets/Components/Navigation";
import Landing from "./assets/Components/Landing";
import Experience from "./assets/Components/Experience";
import Education from "./assets/Components/Education";
import Skills from "./assets/Components/Skills";
import Portfolio from "./assets/Components/Portfolio";
import Footer from "./assets/Components/Footer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false,
    });
  };

  componentDidMount() {
    this.wait(2500);
  }

  render() {
    //if (this.state.loading) return <Loader />; no need for this splsh screen, but you can remove the comment to activate it

    return (
      <div className="App">
        <Navigation NavigationData={this.state.landingData} />
        <Landing landingData={this.state.landingData} />

        <main>
          <About education={this.state.education} />

          <Education education={this.state.education} />

          <Experience experience={this.state.experience} />

          <Skills skills={this.state.skills} />

          <Portfolio portfolio={this.state.portfolio} />
        </main>

        <Footer awards={this.state.awards} />
      </div>
    );
  }
}

export default App;
