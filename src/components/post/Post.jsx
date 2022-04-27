import React from "react";
import "./post.scss";
import { AiOutlineHeart, AiOutlineSmile } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { FiSend } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";

const Post = () => {
  return (
    <div className="post">
      <div className="postInfo">
        <img
          className="postAvatar"
          src="assets/image/272267703_454494759633903_452663243069414998_n.jpg"
          alt=""
        />
        <span>_tuanoday</span>
      </div>
      <div className="postImg">
        <img
          src="assets/image/272267703_454494759633903_452663243069414998_n.jpg"
          alt=""
          className="postImage"
        />
      </div>
      <div className="postReactions">
        <div className="postReact">
          <div className="postIcons">
            <div >
              <AiOutlineHeart className="iconsReaction"/>
              <BiMessageRounded className="iconsReaction"/>
              <FiSend className="iconsReaction"/>
            </div>
            <div>
              <BsBookmark className="iconsMark"/>
            </div>
          </div>
        </div>
        <div className="postLikes">
          <span>
            <b>900</b> nguoi da thich
          </span>
        </div>
        <div className="postTitle">
          <span>
            El Fútbol es un art de los buenos locos, para siempre; llevamos muy
            pocos!!... thêm
          </span>
        </div>
        <div className="postTimeago">
          <span>7 gio truoc</span>
        </div>
      </div>
      <div className="postHr"></div>
      <div className="postComments">
        <div className="postComment">
          <div className="commentInput">
            <AiOutlineSmile className="commentIcon" />
            <input type="text" placeholder="Them binh luan..." />
          </div>
          <span className="commentPush">Dang</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
