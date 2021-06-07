import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calender";

export default (props) => (
  <aside className="menu-area">
    <nav className="menu">
      Refatorar em casa!
      <Link to="/">
        <Calendar />
      </Link>
    </nav>
  </aside>
);
