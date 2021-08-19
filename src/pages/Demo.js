import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./css/Demo.css";
function Demo(props) {
  // console.log(props.nav);
  return (
    <div>
      <Nav activeState={props} />
      <div className="demo">
        <h1>this page is under development </h1>
      </div>
      <Footer />
    </div>
  );
}

export default Demo;
