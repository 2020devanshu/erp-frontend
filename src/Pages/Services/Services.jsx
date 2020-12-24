import React, { useEffect, useState } from "react";
import "./Services.css";
import SnapScroll from "../../Components/SnapScroll/SnapScroll";
import ServicesSvg from "../../Assets/svg/services.svg";
import { ReactComponent as PlanningSvg } from "../../Assets/svg/planning.svg";
import { ReactComponent as AnalysisSvg } from "../../Assets/svg/analysis.svg";
import { ReactComponent as DeploymentSvg } from "../../Assets/svg/deployment.svg";
import { ReactComponent as LiveSvg } from "../../Assets/svg/live.svg";

const Services = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 765);
  let view = isMobile;
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
      <div className="services section section1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <br />
              <h1>Implementation Process</h1>
              <p>
                Our implementation and support services are designed in such a
                way that customer expectations can be met on time and within the
                allocated budget. Our goal-oriented pre-implementation processes
                viz. system study, gap analysis enable smooth implementation,
                faster integration & stabilization of Academia ERP to the
                existing process.
              </p>
            </div>
            <div>
              <br />
              <br />
            </div>
            <div className="col-sm-12 services__block">
              <br />
              <div className="services__image_block">
                <img
                  className="services__image"
                  src={ServicesSvg}
                  alt="Services_SVG"
                />
              </div>
            </div>
          </div>
          <div>
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="services section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 services__block">
              <div>
                <div className="service__step">
                  <PlanningSvg
                    className="service__step__icon one-edge-shadow"
                    style={{ fill: "#353535" }}
                  />
                </div>
                <br />
                <h5 className="service__step__heading">Project Planning</h5>
                <br />
              </div>
              <br />
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>Sales handover and introduction meeting</li>
                    <br />
                    <li>
                      Kick-Off Meeting – Team introductions, broad timelines,
                      and next steps
                    </li>
                    <br />
                    <li>
                      Set objectives, identify action items and set primary
                      ownership
                    </li>
                    <br />
                    <li>Draft blueprint for project execution</li>
                    <br />
                    <li>Identify grey area and formulate risk mitigation</li>
                    <br />
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="services section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 services__block">
              <div>
                <div className="service__step">
                  <AnalysisSvg
                    className="service__step__icon one-edge-shadow"
                    style={{ fill: "#4a36d3" }}
                  />
                </div>
                <br />
                <h5 className="service__step__heading">
                  Configuration Analysis
                </h5>
                <br />
              </div>
              <br />
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>
                      Understand the organization’s current process & practices
                    </li>
                    <br />
                    <li>Review Academia ERP capabilities with stakeholders</li>
                    <br />
                    <li>Design processes standardization</li>
                    <br />
                    <li>
                      Map existing Standard Operating Procedure with Academia
                      processes
                    </li>
                    <br />
                    <li>Identify GAPs in SOPs and document them</li>
                    <br />
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="services section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 services__block">
              <div>
                <div className="service__step">
                  <DeploymentSvg
                    className="service__step__icon one-edge-shadow"
                    style={{ fill: "#f7ac00" }}
                  />
                </div>
                <br />
                <h5 className="service__step__heading">Deployment</h5>
                <br />
              </div>
              <br />
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>Data Extraction - Collect/Convert/Export Datat</li>
                    <br />
                    <li>Data Migration – Import data into Academia</li>
                    <br />
                    <li>
                      Configure /Customize features as per gaps and project
                      scope
                    </li>
                    <br />
                    <li>Create features as per gaps and project scope</li>
                    <br />
                    <li>Create & Deploy Academia instance with client data</li>
                    <br />
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="services section">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12 services__block">
              <div>
                <div className="service__step one-edge-shadow">
                  <LiveSvg
                    className="service__step__icon"
                    style={{ fill: "#cb2027 !important" }}
                  />
                </div>
                <br />
                <h5 className="service__step__heading">Training</h5>
                <br />
              </div>
              <br />
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>Organizational change management</li>
                    <br />
                    <li>
                      User Training/Train-the-Trainer/Hand holding for all
                      stakeholders
                    </li>
                    <br />
                    <li>Perform user acceptance testing</li>
                    <br />
                    <li>Go-Live</li>
                    <br />
                    <li>Post Go-Live support & Maintenance</li>
                    <br />
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="services section">
        <div className="container">
          <div className="row">
            <h1>Working On It</h1>
          </div>
        </div>
      </div>
    </SnapScroll>
  );
}

function DesktopView() {
  return (
    <SnapScroll>
      <div className="services section section1">
        <div className="services__heading">
          <h1>Implementation Process</h1>
          <p>
            Our implementation and support services are designed in such a way
            that customer expectations can be met on time and within the
            allocated budget. Our goal-oriented pre-implementation processes
            viz. system study, gap analysis enable smooth implementation, faster
            integration & stabilization of Academia ERP to the existing process.
          </p>
        </div>
        <div>
          <br />
          <br />
        </div>
        <div className="container-fluid services__process">
          <div className="row">
            <div className="col-md-3 services__block">
              <div className="service__step">
                <PlanningSvg
                  className="service__step__icon"
                  style={{ fill: "#353535" }}
                />
              </div>
              <br />
              <h5 className="service__step__heading">Project Planning</h5>
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>Sales handover and introduction meeting</li>

                    <li>
                      Kick-Off Meeting – Team introductions, broad timelines,
                      and next steps
                    </li>

                    <li>
                      Set objectives, identify action items and set primary
                      ownership
                    </li>

                    <li>Draft blueprint for project execution</li>

                    <li>Identify grey area and formulate risk mitigation</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="col-md-3 services__block">
              <div className="service__step">
                <AnalysisSvg
                  className="service__step__icon"
                  style={{ fill: "#4a36d3" }}
                />
              </div>
              <br />
              <h5 className="service__step__heading">Configuration Analysis</h5>
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>
                      Understand the organization’s current process & practices
                    </li>
                    <li>Review Academia ERP capabilities with stakeholders</li>
                    <li>Design processes standardization</li>
                    <li>
                      Map existing Standard Operating Procedure with Academia
                      processes
                    </li>
                    <li>Identify GAPs in SOPs and document them</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="col-md-3 services__block">
              <div className="service__step">
                <DeploymentSvg
                  className="service__step__icon"
                  style={{ fill: "#f7ac00" }}
                />
              </div>
              <br />
              <h5 className="service__step__heading">Deployment</h5>
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>Data Extraction - Collect/Convert/Export Datat</li>
                    <li>Data Migration – Import data into Academia</li>
                    <li>
                      Configure /Customize features as per gaps and project
                      scope
                    </li>
                    <li>Create features as per gaps and project scope</li>
                    <li>Create & Deploy Academia instance with client data</li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="col-md-3 services__block">
              <div className="service__step">
                <LiveSvg
                  className="service__step__icon"
                  style={{ fill: "#cb2027 !important" }}
                />
              </div>
              <br />
              <h5 className="service__step__heading">Training</h5>
              <section className="check-list-section service__step__description">
                <div>
                  <ul class="check-list">
                    <li>Organizational change management</li>
                    <li>
                      User Training/Train-the-Trainer/Hand holding for all
                      stakeholders
                    </li>
                    <li>Perform user acceptance testing</li>
                    <li>Go-Live</li>
                    <li>Post Go-Live support & Maintenance</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div className="services section">
        <div>
          <h1>Title</h1>
        </div>
        <div className="container">
          <div className="row">
            <h3>Sub Title</h3>
          </div>
        </div>
      </div>
    </SnapScroll>
  );
}

export default Services;
