import React, { useEffect, useState } from "react";
import { IoCreateOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { auth, db } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  addDoc,
} from "firebase/firestore";
import Post from "./Post";
import "./Feed.css";

function Feed() {
  const [user, loading, error] = useAuthState(auth);
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const [feedImage, setfeedImage] = useState(""); // Corrected variable name

  // Function to fetch posts from Firebase
  const fetchPosts = async () => {
    const postsCollection = collection(db, "posts");
    const postsQuery = query(postsCollection);

    const querySnapshot = await getDocs(postsQuery);
    const fetchedPosts = [];

    querySnapshot.forEach((doc) => {
      fetchedPosts.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    setPosts(fetchedPosts);
  };

  useEffect(() => {
    // Fetch posts from Firebase when the component mounts
    fetchPosts();
  }, []); // The empty dependency array ensures it runs once after initial render

  const sendPost = async (e) => {
    e.preventDefault();

    if (user && input.trim() !== "") {
      const postsRef = collection(db, "posts");
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
      
      // Fetch posts again after adding a new post
      fetchPosts();
    }
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <IoCreateOutline />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Post something"
            />
            <button onClick={sendPost} className="light" type="submit">
              <VscSend className="lightblue" />
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          {/* Your input options here */}
        </div>
      </div>
      {posts.map(
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
      )}
    </div>
  );
}

export default Feed;
