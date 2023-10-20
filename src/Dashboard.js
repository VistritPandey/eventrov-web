import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "./Firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

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

  return (
    <div className="bg-black p-12 rounded-lg shadow-lg flex flex-col items-center text-center mt-4">
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <img
          src={user?.photoURL}
          alt="User Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-xl font-bold text-indigo-900 mb-4">Hey, {name}</div>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-blue-600"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
