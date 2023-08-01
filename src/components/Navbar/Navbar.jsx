import "./Navbar.css";
import logo from "../../assets/logo.png";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links">
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
        </div>
        <div className="navbar__sign">
          <p>Sign in</p>
          <button>Sign up</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
