import React, { useState } from "react";
import "./newpost.scss";
import { BsImages } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const NewPost = () => {
  const [close, setClose] = useState(false);

  const handleClose = (e) =>{
    // const close = document.querySelector(".postClose");
    const NewPost = document.querySelector(".newPost");
    const PostPush = document.querySelector(".postPush");
    NewPost.style.display="none";
    PostPush.onclick = e =>{
      e.stopPropagation()
    }
  }
  return (
    <div className="newPost" onClick={handleClose}>
      <div className="postClose">
        <AiOutlineClose className="postClose" values={close} onClick={handleClose} />
      </div>

      <div className="postPush">
        <div className="postHeader">
          <span>Tao bai viet</span>
        </div>
        <div className="postHrr"></div>
        <div className="postChoose">
          <BsImages style={{fontSize : "50px"}}/>
          <span>Keo anh va video vao day</span>
          <button>Chon tu may tinh</button>
        </div>
      </div>

    </div>
  );
};

export default NewPost;
