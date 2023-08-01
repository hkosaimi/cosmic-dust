import "./Header.css";

import v from "../../assets/v.png";
import m from "../../assets/m.png";
function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <div className="header__left__title">
            <h1>
              Let's discover the space together and build our understanding
            </h1>
          </div>
          <div className="header__left__des">
            <p>
              If you're interested in our project and want to hear more about us
              to get the notifications from us, please write your email below.
              We want to hear from you soon. By pressing the contact in the
              navbar.
            </p>
          </div>
          <div className="header__left__email">
            <input type="text" placeholder="Your Email" />
            <button>Submit</button>
          </div>
        </div>
        <div className="header__right">
          <img className="img1" src={m} />
          <img className="img2" src={v} />
        </div>
      </div>
    </>
  );
}

export default Header;
