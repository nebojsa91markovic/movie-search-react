import React, { useState } from "react";
import "./styled.css";

const ErrorMsg = ({ children }) => {
  return <div className="error-wrapper">{children}</div>;
};

export default ErrorMsg;
