import React from "react";
import "./register.scss";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="registerHeader">
        <span className="registerLogo">Instagram</span>
        <span className="registerDesc">
          Dang ky de xem anh va video tu ban be
        </span>
        <button className="registerFacebook">
          <AiFillFacebook className="registerIcon" /> Dang nhap bang Facebook
        </button>
      </div>
      <div className="registerHr"></div>Hoac <div className="registerHr"></div>
      <div className="registerForm">
        <input type="text" placeholder="So di dong hoac email" />
        <input type="text" placeholder="Ten day du" />
        <input type="text" placeholder="Ten nguoi dung" />
        <input type="text" placeholder="Mat khau" />
        <button className="registerButton">Dang ky</button>
        <span className="registerPolicy">
          Bằng cách đăng ký, bạn đồng ý với{" "}
          <b>Điều khoản, Chính sách dữ liệu</b> và <b>Chính sách cookie</b> của
          chúng tôi.
        </span>
      </div>
      <div className="registerLoginn">
        <span>
          Ban co tai khoan? <span className="registerLogin"><Link to='/login'>Dang nhap</Link></span>
        </span>
      </div>
    </div>
  );
};

export default Register;
