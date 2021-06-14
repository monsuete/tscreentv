import "./Header.css";
import React from "react";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const slides = [
  { title: "First item", description: "Lorem ipsum" },
  { title: "Second item", description: "Lorem ipsum" },
  { title: "nso dois", description: "Lorem ipsum" },
  { title: "tres", description: "Lorem ipsum" },
  { title: "quatro", description: "Lorem ipsum" },
  { title: "cinco", description: "Lorem ipsum" },
  { title: "seis", description: "Lorem ipsum" },
];

export default (props) => (
  <header align="center" className="header d-nome d-sm-flex flex-column">
    {/* <h1 className="mt-3" > */}
    {/* <i className={`fa fa-${props.icon}`}></i>{props.title} */}
    {/* <h2  >La Salle</h2>
            <h4>Seu filho merece</h4>
        </h1>
        <p className="lead tex-muted">{props.subtitle}</p> */}
    <Slider previousButton={<span />} nextButton={<span />} autoplay={9000}>
      {slides.map((slide, index) => (
        <div key={index}>
          <h2>{slide.title}</h2>
          <div>{slide.description}</div>
        </div>
      ))}
    </Slider>
  </header>
);
