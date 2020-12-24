import React, { useEffect, useState } from "react";
import "./About.css";
import Footer from "../../Components/Footer/Footer";
import FootSocials from "../../Components/FootSocials/FootSocials";
import SnapScroll from "../../Components/SnapScroll/SnapScroll";
import { ReactComponent as AboutUS } from "../../Assets/svg/about_us.svg";
import GearSvg from "../../Assets/svg/Gear.svg";
// import { AddIcCall, Business } from "@material-ui/icons";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 765);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 765;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
};

function MobileView() {
  return (
    <SnapScroll>
      <div className="about section section1">
        <div className="about__heading">
          <br />
          <h1>Overview</h1>
        </div>
        <div className="container">
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-6 about-col about_vector">
              <div className="about__vector__text">
                <h1>Academia's Role</h1>
                <p>
                  Academia empowers educational institutions of varied sizes and
                  operations to focus on delivering high-quality education
                  without having to think or worry about the administrative
                  process. It enables educational institutions to take care of
                  their entire administrative tasks and assists in repetitive
                  resource-intensive activities through seamless automation.
                </p>
              </div>

              <div className="about__vector__svg">
                <AboutUS className="about_svg" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <div className="about section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-col Gear">
              <br />
              <h3>With Academia</h3>
              <p>
                Processes, departments and functions of an institution become
                automated and streamlined, leading to enhanced productivity,
                transparency and control which finally translates to higher
                overall efficiency.
              </p>
              <br />
              <br />
              <div className="Gear-hover">
                <div className="Gear-svg">
                  <img className="GearSvg" src={GearSvg} alt="GEAR_SVG" />
                </div>
                <h3>Why Academia</h3>
                <p>
                  The challenges of educational institutions have changed over
                  the years. Educational institutions today are facing the
                  demands of a new environment with changing student profile and
                  expectations, more acute resource constraints and greater
                  demands for institutional accountability; while the challenges
                  before educators are formidable
                </p>
              </div>
            </div>
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </SnapScroll>
  );
}

function DesktopView() {
  return (
    <SnapScroll>
      <div className="about section section1">
        <div className="about__heading">
          <h1>Overview</h1>
          <br />
          <br />
        </div>
        <div className="container">
          <div className="row" style={{ margin: "0" }}>
            <div className="col-md-6 about-col about_vector">
              <div className="about__vector__text">
                <h1>Academia's Role</h1>
                <p>
                  Academia empowers educational institutions of varied sizes and
                  operations to focus on delivering high-quality education
                  without having to think or worry about the administrative
                  process. It enables educational institutions to take care of
                  their entire administrative tasks and assists in repetitive
                  resource-intensive activities through seamless automation.
                </p>
              </div>

              <div className="about__vector__svg">
                <AboutUS className="about_svg" />
              </div>
            </div>
            <div className="col-md-6 about-col Gear">
              <h3>With Academia</h3>
              <p>
                Processes, departments and functions of an institution become
                automated and streamlined, leading to enhanced productivity,
                transparency and control which finally translates to higher
                overall efficiency.
              </p>
              <br />
              <div className="Gear-hover">
                <div className="Gear-svg">
                  <img className="GearSvg" src={GearSvg} alt="GEAR_SVG" />
                </div>
                <h3>Why Academia</h3>
                <p>
                  The challenges of educational institutions have changed over
                  the years. Educational institutions today are facing the
                  demands of a new environment with changing student profile and
                  expectations, more acute resource constraints and greater
                  demands for institutional accountability; while the challenges
                  before educators are formidable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="About__form section container">
        <div className="row About__form__row">
          <div className="About__form__info col-md-5">
            <div>
              <br />
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                cupiditate, eveniet mollitia quas perspiciatis quis veritatis
                voluptatum nobis minus quos sint accusantium vitae facilis
                totam, voluptate illo perferendis magni deserunt!
              </h5>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="About__form__form col-md-6">
            <div>
              <br />
              <h2>About US</h2>
            </div>
            <br />
            <br />
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      {/* <div className="section">
        <Footer />
        <FootSocials />
      </div> */}
    </SnapScroll>
  );
}

export default About;
