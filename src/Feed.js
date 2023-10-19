import React, { useEffect, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { auth, db } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, collection, query, getDocs, where, addDoc } from "firebase/firestore";
//import Post from "./Post";

function Feed() {
  const [user, loading, error] = useAuthState(auth);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [feedImage, setfeedImage] = useState(""); // Corrected variable name

  const sendPost = async (e) => {
    e.preventDefault();
      
    if (user && input.trim() !== '') {
      const postsRef = collection(db, "posts"); // Get the reference to the "posts" collection
      await addDoc(postsRef, {
        name: user.displayName,
        description: "description",
        message: input,
        photoUrl: user.photoURL,
        image: feedImage,
        timestamp: Date.now(),
      });
  
      setInput("");
      setfeedImage("");
    }
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md mb-4">
      <div className="flex items-center mb-4">
        <IoCreateOutline className="text-2xl text-gray-500" />
        <form className="flex-grow ml-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="w-full p-2 border rounded-lg focus:outline-none"
            placeholder="Post something"
          />
        </form>
        <button
          onClick={sendPost}
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          <VscSend className="text-2xl" />
        </button>
      </div>
      <div className="feed__inputOptions">
        {/*{posts.map(
        ({ id, data: { name, message, photoUrl, timestamp, image } }) => (
          <Post
            key={id}
            name={name}
            message={message}
            photoUrl={photoUrl}
            timestamp={timestamp}
            image={image}
          />
        )
      )} */}
      </div>
    </div>
  );
}

export default Feed;
