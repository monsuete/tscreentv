import "./Main.css";
import React from "react";
import Header from "./Header";
import Slide from "./Slide";

export default (props) => (
  <React.Fragment>
    <Header {...props} />
    <main className="main d-nome d-sm-flex flex-column">
      <Slide />
    </main>
  </React.Fragment>
);
