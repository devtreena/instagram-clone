import React from "react";
import "./notice.scss";

const Notice = () => {
  return (
    <div className="notice">
      <div className="noticeTime">
        <span>Thang nay</span>
      </div>
      <div className="noticeAll">
        <div className="noticeSingle">
          <div className="noticeInfo">
            <img
              src="assets/image/272267703_454494759633903_452663243069414998_n.jpg"
              alt=""
            />
            <span className="noticeDesc">
              <b>tuanodayy</b> da bat dau theo doi ban
            </span>
            -<span style={{ fontSize: "12px", color: "gray" }}>12tuan</span>
          </div>
          <button className="noticeFollow">Theo doi</button>
        </div>
      </div>
    </div>
  );
};

export default Notice;
