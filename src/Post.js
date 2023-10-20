import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import {BsFillHandThumbsUpFill, BsFillChatLeftFill, BsShareFill} from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

function Post({ name, message, photoUrl, timestamp, image }) {

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{new Date(timestamp).toUTCString()}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__buttons">
        <InputOption Icon={BsFillHandThumbsUpFill} title="Like" color="gray" />
        <InputOption
          Icon={BsFillChatLeftFill}
          title="Comment"
          color="lightgreen"
        />
        <InputOption Icon={BsShareFill} title="Share" color="orange" />
      </div>
    </div>
  );
}

export default Post;
