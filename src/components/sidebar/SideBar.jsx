import React from "react";
import Footer from "../footer/Footer";
import "./sidebar.scss";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarProfile">
        <div className="myProfile">
          <img
            src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg"
            alt=""
          />
          <span>_tuanoday</span>
        </div>
        <span className="profileSwitch">Chuyen</span>
      </div>
      <div className="friendMore">
        <div className="friendTiltle">
          <span className="titleHide">Goi y cho ban</span>
          <span className="titleMore">Xem tat ca</span>
        </div>
        <ul className="friendList">
          <li className="itemMore">
            <div className="itemInfo">
              <img
                src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg"
                alt=""
              />
              <span>_tuanoday</span>
            </div>
            <span className="itemFollow">Theo doi</span>
          </li>
          <li className="itemMore">
            <div className="itemInfo">
              <img
                src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg"
                alt=""
              />
              <span>_tuanoday</span>
            </div>
            <span className="itemFollow">Theo doi</span>
          </li>
        </ul>
      </div>
      <div className="sidebarFooter">
        <Footer />
      </div>
    </div>
  );
};

export default SideBar;
