import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../images/home.png";
import InviteFriendIcon from "../images/invite-friend.png";
import TasksIcon from "../images/Tasks-icon.png";
import WalletIcon from "../images/wallet-icon.png";
import LeaderboardIcon from "../images/Leaderboard-icon.png";
import flashIcon from "../images/flashIcon.png";
import mapImage from "../images/map.png";
import xtokenIcon from "../images/X token.png";

interface MainScreenProps {
  user: string | null;
}

const MainScreen: React.FC<MainScreenProps> = ({ user }) => {
  const [tripStarted, setTripStarted] = useState(false);
  const navigate = useNavigate();

  const handleStartTrip = () => {
    setTripStarted(true);
  };

  return (
    <div className="relative w-full h-screen bg-black text-white">
      {/* Map */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src={mapImage}
          alt="Map"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* Welcome Message */}
      <div className="absolute top-6 right-6 z-10">
        {user ? (
          <div
            className="flex items-center text-gray-200 font-semibold text-lg py-2 px-4 rounded-full shadow-md"
            style={{ backgroundColor: "#161616" }}
          >
            Welcome, {user}
          </div>
        ) : (
          <div className="text-gray-500 text-lg">Please log in</div>
        )}
      </div>

      {/* Top Header Section */}
      <div className="absolute top-20 left-6 right-6 z-6 flex justify-center items-center">
        <div
          className="relative w-full max-w-lg rounded-full p-3 flex justify-between items-center shadow-lg z-20"
          style={{ backgroundColor: "#161616" }}
        >
          {/* X tokens and completed trips */}
          <div className="flex items-center">
            <img
              src={xtokenIcon}
              alt="X Token Logo"
              className="w-8 h-9 mr-3" // Icon size and spacing
            />
            <div className="flex flex-col">
              <p className="text-gray-200 font-semibold text-lg leading-tight">
                12,000 X tokens
              </p>
              <p className="text-gray-400 text-sm">40 Completed trips</p>
            </div>
          </div>

          {/* Bronze League */}
          <div
            className="flex items-center text-white border border-white px-3 py-1 rounded-full shadow-md"
            style={{ backgroundColor: "#161616" }}
          >
            <img src={flashIcon} alt="Arrow" className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Bronze league</span>
          </div>
        </div>
      </div>

      {/* Bottom Text - Trip Details */}
      <div className="absolute bottom-28 w-full px-6 text-sm flex justify-between items-center z-10">
        <span className="text-gray-300 font-medium">Today's Trip</span>
        <span className="text-gray-300 font-medium">Trip 1/5</span>
      </div>

      {/* Start Trip Button or Trip Begun Message */}
      <div className="absolute bottom-16 w-full px-6 z-10">
        {!tripStarted ? (
          <div className="relative">
            <div className="w-80 h-1 bg-gray-400 mx-auto mb-2 rounded"></div>
            <button
              onClick={handleStartTrip}
              className="w-full py-2 rounded-full font-bold text-lg shadow-md relative"
              style={{
                backgroundColor: "#FFD700",
                color: "#000",
                marginBottom: "16px",
              }}
            >
              Start New Trip
            </button>
          </div>
        ) : (
          <div
            className="w-full py-2 text-lg text-center font-semibold rounded-full"
            style={{
              backgroundColor: "#161616",
              color: "#515151",
              marginBottom: "16px",
            }}
          >
            Your trip has begun.
          </div>
        )}
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 w-full bg-black px-8 py-4 flex justify-between items-center text-white shadow-lg z-10">
        <img
          src={HomeIcon}
          alt="Home"
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <img
          src={LeaderboardIcon}
          alt="Leaderboard"
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/leaderboard")}
        />
        <img
          src={TasksIcon}
          alt="Tasks"
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/task-lists")}
        />
        <img
          src={InviteFriendIcon}
          alt="Invite Friend"
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/invite-friends")}
        />
        <img
          src={WalletIcon}
          alt="Wallet"
          className="w-6 h-6 cursor-pointer"
          onClick={() => navigate("/wallet")}
        />
      </div>
    </div>
  );
};

export default MainScreen;
