import React from "react";
import { Redirect } from "react-router-dom";

const Protected = (props) => {
  const Cmp = props.cmp;
  var token = JSON.parse(localStorage.getItem("token"));
  //   console.warn(localStorage.getItem("dktest"));
  return (
    <div className="protected">
      {token ? <Cmp /> : <Redirect to="/"></Redirect>}
    </div>
  );
};
export default Protected;

// Zeit
