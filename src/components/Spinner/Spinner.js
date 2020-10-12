import React, { useState } from "react";
import "./styled.css";
import Loader from "../../images/spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner-wraper">
      <img id="spinner" src={Loader} alt="Loading spinner" />
    </div>
  );
};

export default Spinner;
