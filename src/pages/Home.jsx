import React from "react";
import Navbar from "../components/Navbar";
import { FaLinkedinIn, FaGithubSquare, FaInstagram } from "react-icons/fa";
import "./Home.css";

import { connect } from "react-redux";
import { setNav } from "../redux/actions/_appActions";

function WorkCard({ thumb, double, name }) {
  console.log(thumb);
  return (
    <div className={`work_card ${double && "col-2"}`}>
      <div
        className="work_thumb"
        style={{ backgroundImage: `url(${thumb})` }}
      ></div>
      <div className="work_card_overlay">
        <div className="work_card_footer">
          <span className="work-_chip">Featured</span>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}

function BlackWorkCard() {
  return (
    <div className="work_card_blank">
      <div className="work_thumb_blank"></div>
      <div className="work_card_overlay_blank">
        <div className="work_card_footer_blank">
          <span className="work_chip"></span>
          <div className="work_name"></div>
        </div>
      </div>
    </div>
  );
}
// import ArticleAdd from "../components/ArticleAdd"

function Home(props) {
  console.log(props.works);
  const handleNav = (e) => {
    console.log(e.target);
    if (
      !e.target.classList.contains("mobile__nav") &&
      !e.target.classList.contains("mobile_nav_menu")
    ) {
      props.setNav(false);
    }
  };

  return (
    <div className="home" onClick={handleNav}>
      <div className="container">
        {props.data && <Navbar data={props.data && props.data} />}
        <div className="hero_header">
          <h1>
            Motivation Is The First Step To <span>Success</span>
          </h1>
          <div className="social_profiles">
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaGithubSquare />
            </a>
            <a href="">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="sections">
          <div className="work_section">
            <span className="section_label">WORKS</span>
            <div className="works">
              {props.works.length > 0 ? (
                props.works.map((work, index) => (
                  <WorkCard
                    key={index}
                    thumb={work.thumb}
                    double={index % 2 === 0}
                    name={work.name}
                  />
                ))
              ) : (
                <>
                  <BlackWorkCard />
                  <BlackWorkCard />
                  <BlackWorkCard />
                  <BlackWorkCard />)
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.appReducer.data,
  nav: state.appReducer.nav,
  works: state.appReducer.works,
});

const mapDispatchToProps = (dispatch) => ({
  setNav: (nav) => dispatch(setNav(nav)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
