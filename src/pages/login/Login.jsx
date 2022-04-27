import React from "react";
import "./login.scss";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginLogo">Instagram</span>
      <div className="loginForm">
        <input
          type="text"
          placeholder="Ten nguoi dung, email"
        />

        <input type="text" placeholder="Mat khau" />
        <button className="loginButton">Dang ky</button>
      </div>

      <div className="loginHeader">
        <div className="loginHr"></div>Hoac <div className="loginHr"></div>
        <button className="loginFacebook">
          <AiFillFacebook className="loginIcon" /> Dang nhap bang Facebook
        </button>
        <span className="loginForget">Quen mat khau?</span>
      </div>
      <div className="loginRegisterr">
        <span>
          Ban chua co tai khoan u?{" "}
          <span className="loginRegister"><Link to='/register'>Dang ky</Link></span>
        </span>
      </div>
    </div>
  );
};

export default Login;
