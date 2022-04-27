import React from "react";
import "./navbar.scss";
import { AiOutlineSearch, AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { RiMessengerLine, RiSafariLine } from "react-icons/ri";
import { BiCommentAdd } from "react-icons/bi";
import Hr from "../hr/Hr";
import { Link } from "react-router-dom";
import Notice from "../../pages/notice/Notice";

const NavBar = () => {
  return (
    <>
      <div className="navBar">
        <div className="logo">
          <span>Instagram</span>
        </div>

        <div className="search">
          <div className="searchInput">
            <div className="searchIcon">
              <AiOutlineSearch />
            </div>
            <input type="text" placeholder="Tim Kiem" />
          </div>
        </div>

        <div className="list">
          <ul className="listItems">
            <li className="item">
              <Link to="/">
                <AiFillHome className="itemIcon" />
              </Link>
            </li>
            <li className="item">
              <Link to="/inboxs">
                <RiMessengerLine className="itemIcon" />
              </Link>
            </li>
            <li className="item">
              <Link to="/newPost">
                <BiCommentAdd className="itemIcon" />
              </Link>
            </li>
            <li className="item">
              <Link to="/stories">
                <RiSafariLine className="itemIcon" />
              </Link>
            </li>
            <li className="item">
              <Link to="">
                <AiOutlineHeart className="itemIcon" />
              </Link>
              
            </li>
            <li className="item">
              <Link to='/settings'>
                <img
                  className="avatar"
                  src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Hr />
    </>
  );
};

export default NavBar;
