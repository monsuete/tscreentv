import "./Slide.css";

import React, { Component } from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import api from "../../services/api";

class Slide extends Component {
  state = {
    posts: [],
  };

  async fetchSlides() {
    const response = await api.get("slides");
    this.setState({ posts: response.data });

    setTimeout(() => {
      this.fetchSlides();
    }, 1000 * 60 * 60);
  }

  async componentDidMount() {
    this.fetchSlides();
  }

  render() {
    const { posts } = this.state;
    return (
      <aside className="test">
        <Slider previousButton={<span />} nextButton={<span />} autoplay={2000}>
          {posts.map((post, index) => (
            <div
              className="url"
              key={index}
              style={{
                background: `url('${post.url}') no-repeat center center`,
              }}
            ></div>
          ))}
        </Slider>
      </aside>
    );
  }
}

export default Slide;
