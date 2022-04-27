import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ul className="footerList">
        <li className="footerItem">Gioi thieu</li>
        <li className="footerItem">Bao chi</li>
        <li className="footerItem">Tro giup</li>
        <li className="footerItem">Api</li>
        <li className="footerItem">Viec lam</li>
        <li className="footerItem">Quyen rieng tu</li>
        <li className="footerItem">Dieu khoan</li>
        <li className="footerItem">Vi tri</li>
        <li className="footerItem">Tai khoan lien quan nhat</li>
        <li className="footerItem">Hastag</li>
        <li className="footerItem">Ngon ngu</li>
      </ul>
      <div className="footerFrom">
        <span>© 2022 INSTAGRAM FROM TREE</span>
      </div>
    </div>
  );
};

export default Footer;
