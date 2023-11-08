import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./Firebase";
import { query, collection, getDocs, where, addDoc } from "firebase/firestore";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);

  const joinWaitlist = async () => {
    if (user) {
      const waitlistRef = collection(db, "waitlist");
      try {
        await addDoc(waitlistRef, {
          email: user.email,
        });
        alert("You have successfully joined the waitlist!");
      } catch (error) {
        console.error(error);
        alert("An error occurred while joining the waitlist. Please try again later.");
      }
    }
  };
  

  return (
    <div className="bg-black p-12 rounded-lg shadow-lg flex flex-col items-center text-center mt-4">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img
          src={"https://robohash.org/"+name}
          alt="User Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <a href="/booking">
      <div className="text-xl font-bold text-indigo-900 mb-4">Hey, {name}</div>
      </a>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600"
        onClick={logout}
      >
        Logout
      </button>
      <h1 className="text-white text-xl text-center mt-4">
        </h1>
      <h1 className="text-white text-xl text-center mt-4">
        Thank you for joining the waitlist for our social community. Once you are accepted, you will receive an email from us inviting you to complete your profile.
      </h1>
      <h1 className="p-12 text-white text-xl text-center mt-4">
      We are launching a new social community to connect you with individuals who share your vision. Post, interact, collaborate on events, find talent to hire, or get your next gig. This creative community is an outlet for you to share your passion without the stress of how many followers you have or views you get.
      </h1>
      <p className="p-8"> </p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        onClick={joinWaitlist}
      >
        Join the Waitlist
      </button>
    </div>
  );
}

export default Dashboard;
