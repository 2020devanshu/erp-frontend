import React, { useEffect, useState } from "react";
import "./Home.css";
import ERP_SVG from "../../Assets/svg/ERP.svg";
import GameController from "../../Assets/svg/GameController.svg";
import ToolTip from "../../Components/ToolTip/ToolTip";
import SnapScroll from "../../Components/SnapScroll/SnapScroll";

const Home = () => {
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
      <div className="snap-section bigScreen section section1">
        <div className="home__heading">
          <h1>Academia ERP Software</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            eligendi quasi rerum earum.
          </p>
        </div>
        <div className="col-sm-12">
          <img className="ERP_SVG" src={ERP_SVG} alt="ERP_SVG" />
        </div>
      </div>
      <div className="snap-section bigScreen section ">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 tip">
              <div className="GMsvg">
                <img
                  className="GameController"
                  src={GameController}
                  alt="ERP_SVG"
                />
              </div>
              <h3>ERP is Fun To interact with</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                corrupti voluptatem,
              </p>
            </div>
            <div>
              <br />
              <br />
              <br />
            </div>
            <div className="col-ms-12 accordian-container">
              <div className="accordion">
                <section className="accordion-item">
                  <div className="accordian-item-heading">
                    <p>Effiecient Work Process</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <div>
                          <img
                            className="accordian-image"
                            src="https://www.academiaerp.com/wp-content/uploads/2017/11/Academia-ERP-Efficient-Work-Process-200x200.png"
                            alt="Acc"
                          />
                        </div>
                        <div>
                          <span className="accordian-span">
                            Automation & Streamlining of functions bring
                            efficient work- process flow.
                          </span>
                        </div>
                      </div>
                    </ToolTip>
                  </div>
                </section>
                <section className="accordion-item">
                  <div className="accordian-item-heading">
                    <p>Better Control</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <span className="accordian-span">
                          Standardization of processes and quick access to
                          information lead to better control on system.
                        </span>
                      </div>
                    </ToolTip>
                  </div>
                </section>
                <section className="accordion-item accordion-item">
                  <div className="accordian-item-heading">
                    <p>Enhanced Productivity</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <span className="accordian-span">
                          Academia ERP increases productivity by streamlining
                          workflow across departments.
                        </span>
                      </div>
                    </ToolTip>
                  </div>
                </section>
                <section className="accordion-item">
                  <div className="accordian-item-heading">
                    <p>Quick decision making</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <span className="accordian-span">
                          Smooth information flow and accessibility to data /
                          reports enable quick decision making.
                        </span>
                      </div>
                    </ToolTip>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="snap-section bigScreen section">
        <div className="features">
          <h1>Features</h1>
        </div>
      </div>
    </SnapScroll>
  );
}

function DesktopView() {
  return (
    <SnapScroll>
      <div className="snap-section bigScreen section section1">
        <div className="home__heading">
          <h1>Academia ERP Software</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore,
            eligendi quasi rerum earum.
          </p>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 accordian-container">
              <div className="accordion">
                <section className="accordion-item">
                  <div className="accordian-item-heading">
                    <p>Effiecient Work Process</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <div>
                          <img
                            className="accordian-image"
                            src="https://www.academiaerp.com/wp-content/uploads/2017/11/Academia-ERP-Efficient-Work-Process-200x200.png"
                            alt="Acc"
                          />
                        </div>
                        <div>
                          <span className="accordian-span">
                            Automation & Streamlining of functions bring
                            efficient work- process flow.
                          </span>
                        </div>
                      </div>
                    </ToolTip>
                  </div>
                </section>
                <section className="accordion-item">
                  <div className="accordian-item-heading">
                    <p>Better Control</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <span className="accordian-span">
                          Standardization of processes and quick access to
                          information lead to better control on system.
                        </span>
                      </div>
                    </ToolTip>
                  </div>
                </section>
                <section className="accordion-item accordion-item">
                  <div className="accordian-item-heading">
                    <p>Enhanced Productivity</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <span className="accordian-span">
                          Academia ERP increases productivity by streamlining
                          workflow across departments.
                        </span>
                      </div>
                    </ToolTip>
                  </div>
                </section>
                <section className="accordion-item">
                  <div className="accordian-item-heading">
                    <p>Quick decision making</p>
                    <ToolTip>
                      <div className="accordion-item-content">
                        <span className="accordian-span">
                          Smooth information flow and accessibility to data /
                          reports enable quick decision making.
                        </span>
                      </div>
                    </ToolTip>
                  </div>
                </section>
              </div>
            </div>
            <div className="col-md-6">
              <img className="ERP_SVG" src={ERP_SVG} alt="ERP_SVG" />
            </div>
            <div className="col-md-3 tip">
              <div className="GMsvg">
                <img
                  className="GameController"
                  src={GameController}
                  alt="ERP_SVG"
                />
              </div>
              <h3>ERP is Fun To interact with</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                corrupti voluptatem,
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="snap-section section ">
        <div className="features">
          <h1>Features</h1>
        </div>
      </section>
    </SnapScroll>
  );
}

export default Home;
