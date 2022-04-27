import React from "react";
import "./friend.scss";

const Friend = () => {
  return (
    <div className="friend">
      <ul className="listsFriends">
        <li className="friendItem">
          <img
            src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg"
            alt=""
            className="friendAvatar"
          />
          <span className="friendName">_tuanoday</span>
        </li>
        <li className="friendItem">
          <img
            src="https://vcdn-dulich.vnecdn.net/2020/09/04/1-Meo-chup-anh-dep-khi-di-bien-9310-1599219010.jpg"
            alt=""
            className="friendAvatar"
          />
          <span className="friendName">_tuanoday</span>
        </li>
      </ul>
    </div>
  );
};

export default Friend;
