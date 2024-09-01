import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function Dashboard() {
  const navigate = useNavigate();
  const auth = getAuth();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Check if the user is authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
      } else {
        // Set the user's name
        const [firstName] = user.email.split("@");
        setUserName(firstName);
      }
    });

    return () => unsubscribe(); // Clean up subscription on unmount
  }, [auth, navigate]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-10 rounded-xl shadow-lg">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Welcome, {userName}!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          This is your dashboard. You are logged in.
        </p>
        <div className="mt-6">
          <button
            onClick={handleLogout}
            className="w-full text-center text-red-600 font-medium"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
