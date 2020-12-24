import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Main from "../Components/Main/Main";
import Nav from "../Components/Nav/Nav";
const ERP = () => {
  return (
    <div className="erp">
      <React.Fragment>
        <Router>
          <Nav />
          <Main />
        </Router>
      </React.Fragment>
    </div>
  );
};

export default ERP;
