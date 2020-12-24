import React, { Component } from "react";
import "./SnapScroll.css";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

class SnapScroll extends Component {
  // onLeave(origin, destination, direction) {
  //   console.log("Leaving section " + origin.index);
  // }
  // afterLoad(origin, destination, direction) {
  //   console.log("After load: " + destination.index);
  // }
  render() {
    return (
      <ReactFullpage
        scrollOverflow={false}
        sectionsColor={[]}
        // onLeave={this.onLeave.bind(this)}
        // afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return <div id="fullpage-wrapper">{this.props.children}</div>;
        }}
      />
    );
  }
}

export default SnapScroll;
