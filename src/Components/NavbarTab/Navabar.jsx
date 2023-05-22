import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navabar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownP, setdropdownP] = useState(false);
  // const[sidebar,setSidebar]=useState("nav-list");
  const [sidebar, setSidebar] = useState("nav-list");

  const handleClick = (event) => {
    setSidebar((current) => !current);
  };

  return (
    <>
      <section className="navigation">
        <div className="nav-container">
          <div className="brand">
            <a href="#!">Logo</a>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="navbar-toggle" onClick={handleClick}>
                <span></span>
              </a>
            </div>
            <ul className={sidebar ? "nav-list" : "navlist2"}>
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a onClick={() => setDropdown(!dropdown)}>Services</a>

                {dropdown && (
                  <ul className="navbar-dropdown">
                    <li>
                      <a href="#!">Sass</a>
                    </li>
                    <li>
                      <a href="#!">Less</a>
                    </li>
                    <li>
                      <a href="#!">Stylus</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#!">Portfolio</a>
              </li>
              <li>
                <a onClick={() => setdropdownP(!dropdownP)}>Category</a>
                {dropdownP && (
                  <ul className="navbar-dropdown">
                    <li>
                      <a href="#!">Sass</a>
                    </li>
                    <li>
                      <a href="#!">Less</a>
                    </li>
                    <li>
                      <a href="#!">Stylus</a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Navabar;
