import React from "react";

const Nav = () => {
   return (
  <div className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-list-item"><a className="nav-link" href="index.html">About Me</a></li>
            <li className="navbar-list-item"><a className="nav-link" href="blog/blog-index.html">Foundations Blog</a></li>
            <li className="navbar-list-item"><a className="nav-link" href="https://megan-duncan.github.io/minesweeper/">PipiSurfer</a></li>
            <li className="navbar-list-item"><a className="nav-link" href="https://funpage3.herokuapp.com/#/">Fun Page</a></li>
          </ul>
        </nav>
      </div>
    </div >
   )
};

export default Nav;