import React, { useEffect, useState } from "react";
import "./style.css";

function LoginBtn(props) {
  return (
    <div className="login-btn">
      <button className="button-Div" {...props}>
      Login
      </button>
      <div className="bg-one"></div>
      <div className="bg-one"></div>
      <div className="bg-one"></div>
      <div className="bg-one"></div>
    </div>
  );
}
export default LoginBtn;
