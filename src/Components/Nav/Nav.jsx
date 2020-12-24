import React from "react";
import "./Nav.css";
// import "../../App.css";
import {
  ExitToApp,
  HomeOutlined,
  InfoOutlined,
  Person,
  SettingsApplicationsOutlined,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <div className="Sidebar__App">
      <div className="Sidebar">
        <div className="Sidebar__item Selected">
          <div className="shape">
            <Link to="/Home">
              <IconButton style={{ outline: "none" }}>
                <HomeOutlined
                  fontSize="large"
                  className={` Sidebar__Icon ${
                    location.pathname === "/Home" ? "iconActive" : ""
                  }`}
                />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="Sidebar__item">
          <Link to="/Services">
            <IconButton style={{ outline: "none" }}>
              <SettingsApplicationsOutlined
                fontSize="large"
                className={` Sidebar__Icon ${
                  location.pathname === "/Services" ? "iconActive" : ""
                }`}
              />
            </IconButton>
          </Link>
        </div>
        <div className="Sidebar__item">
          <Link to="/About">
            <IconButton style={{ outline: "none" }}>
              <InfoOutlined
                fontSize="large"
                className={` Sidebar__Icon ${
                  location.pathname === "/About" ? "iconActive" : ""
                }`}
              />
            </IconButton>
          </Link>
        </div>
        <div className="Sidebar__item">
          <Link to="/Contact">
            <IconButton style={{ outline: "none" }}>
              <Person
                fontSize="large"
                className={` Sidebar__Icon ${
                  location.pathname === "/Contact" ? "iconActive" : ""
                }`}
              />
            </IconButton>
          </Link>
        </div>
        <div className="Sidebar__item">
          <Link to="/Login">
            <IconButton style={{ outline: "none" }}>
              <ExitToApp
                fontSize="large"
                className={` Sidebar__Icon ${
                  location.pathname === "/Login" ? "iconActive" : ""
                }`}
              />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
