import React, { Component } from "react";
import HeroImg from "../assets/hero-img.svg";
import { animateScroll as scroll } from "react-scroll";

class Landing extends Component {
  scrollToBottom = e => {
    e.preventDefault();
    scroll.scrollToBottom({
      duration: 2000,
      delay: 100,
      smooth: true
    });
  };
  render() {
    return (
      <div className="container is-fluid landing-home">
        <div className="landing">
          <div className="columns is-vcentered">
            <div className="column landing-text has-text-centered ">
              <h1 className=" has-text-centered ">
                <i className="fas fa-link fa-2x logo" />
                <span className="is-size-1 logo-font">Shortly</span>
              </h1>
              <h2 className="is-size-4 has-text-centered ">
                The best way to shorten your links!
              </h2>
              <button
                onClick={this.scrollToBottom}
                className="button landing-btn  is-centered is-medium"
              >
                Try Now!
              </button>
            </div>
            <div className="column landing image">
              <img src={HeroImg} className="hero-img is-pulled-right" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
