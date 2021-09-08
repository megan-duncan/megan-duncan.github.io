import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from "./Home.jsx";

const Nav = ({ setView }) => {
  const handleClick = (string) => {
    setView(string)
  }
   return (
  <div className="header">
    <div className="container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item" onClick={() => handleClick('home')}><p> Home </p></li>
          <li className="navbar-list-item" onClick={() => handleClick('blog-index')}><p> Foundations Blog </p></li>
          <li className="navbar-list-item"><a className="nav-link" href="https://megan-duncan.github.io/minesweeper/">PipiSurfer</a></li>
          <li className="navbar-list-item"><a className="nav-link" href="https://funpage3.herokuapp.com/#/">Fun Page</a></li>
        </ul>
      </nav>
    </div>
  </div >
   )
};

export default Nav;