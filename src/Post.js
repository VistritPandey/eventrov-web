import { Avatar } from "@material-ui/core";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";
import {
  BsFillHandThumbsUpFill,
  BsFillChatLeftFill,
  BsShareFill,
} from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./Firebase";
import {
  query,
  collection,
  getDocs,
  where,
  Timestamp, // Import Timestamp
} from "firebase/firestore";

function Post({ name, message, photoUrl, timestamp, image }) {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  // Function to format timestamp
  function formatTimestamp(timestamp) {
    // Assuming timestamp is a Firestore Timestamp object
    const dateInMillis = timestamp.toMillis();
    const date = new Date(dateInMillis);
    return date.toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    });
  }

  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={"https://robohash.org/"+name} />
        <div className="post__info">
          <h2>{name}</h2>
          <p>{formatTimestamp(timestamp)}</p> {/* Format the timestamp */}
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
