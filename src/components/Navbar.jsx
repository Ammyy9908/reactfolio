import React from "react";
import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { connect } from "react-redux";
import { setNav } from "../redux/actions/_appActions";
function Navbar(props) {
  const handleNav = (url) => {
    window.location.href = url;
  };

  return (
    <header id="top">
      <div className="nav_links_right">
        <a href="#works">Works</a>
        <a href="#about">About</a>
      </div>
      <span className="brand-logo">
        <img src={props.data.image} alt="" />
      </span>

      <button
        className="mobile_nav_menu"
        onClick={() => props.setNav(!props.nav)}
      >
        <FiMenu />
      </button>

      <div className="nav_links_left">
        <a href="#contact">Contact</a>
        <a href="#github">Github</a>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => ({
  data: state.appReducer.data,
  nav: state.appReducer.nav,
});

const mapDispatchToProps = (dispatch) => ({
  setNav: (nav) => dispatch(setNav(nav)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
