import "./Navbar.css";
import logo from "../../assets/logo.png";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { useState } from "react";

function Menu() {
  return (
    <>
      <p>
        <a>Home</a>
      </p>
      <p>
        <a>Explore</a>
      </p>
      <p>
        <a>Oxygen</a>
      </p>
      <p>
        <a>About</a>
      </p>
      <p>
        <a>Contact</a>
      </p>
    </>
  );
}

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links-container">
          <div className="navbar__links">
            <Menu />
          </div>
        </div>
        <div className="navbar__sign">
          <p>Sign in</p>
          <button>Sign up</button>
          {toggle ? (
            <AiOutlineClose
              className="menu_icon"
              onClick={() => setToggle(false)}
            />
          ) : (
            <HiOutlineMenuAlt4
              className="menu_icon"
              onClick={() => setToggle(true)}
            />
          )}
          {toggle && (
            <div className="navbar__links">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
