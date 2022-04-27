import React from "react";
import "./messages.scss";
import { FiSend } from "react-icons/fi";
import {
  AiOutlineInfoCircle,
  AiOutlineSmile,
  AiOutlinePicture,
  AiOutlineHeart,
} from "react-icons/ai";

const Messages = () => {
  return (
    <div className="messages">
      {/* <div className="messagesContent">
        <div className="messagesIcon">
          <FiSend />
        </div>
        <span>Tin nhan cua ban</span>
        <p>Gui anh va tin nhan rieng tu cho ban be hoac nhom.</p>
        <button className="messagesButton">Gui tin nhan</button>
      </div> */}

      <div className="messagesWithFriend">
        <div className="messagesHeader">
          <div className="messagesInfo">
            <div className="messagesImg">
              <img
                src="assets\image\272267703_454494759633903_452663243069414998_n.jpg"
                alt=""
              />
            </div>
            <div className="messagesName">
              <span className="name">Bui Huu Tuan</span>
              <span className="messagesAgo">12 gio truoc</span>
            </div>
          </div>
          <AiOutlineInfoCircle className="messagesNotice" />
        </div>
        <div className="messagesHr"></div>
        <div className="messagesWrite">
          <div className="messagesSend">
            <div className="messagesInput">
              <AiOutlineSmile className="messagesSmile" />
              <input type="text" placeholder="Nhan tin..." />
            </div>
            {/* <span className="messagesPush">Gui</span> */}
            <div className="messagesReact">
              <AiOutlinePicture  />
              <AiOutlineHeart style={{marginLeft : "10px"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
