import React from "react";
import { useNavigate } from "react-router-dom";
import leaderboardImage from "../images/Leaderboard.png";
import xrideCoin from "../images/x-coin.png";
import HomeIcon from "../images/Home.png"; // Home icon
import InviteFriendIcon from "../images/invite-friend.png";
import TasksIcon from "../images/Tasks-icon.png";
import WalletIcon from "../images/wallet-icon.png";
import LeaderboardIcon from "../images/Leaderboard-icon.png";
import "../App.css";

const Leaderboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col">
      {/* Top section */}
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Leaderboard 🔥</h1>
        <p className="text-sm">12.3k Xriders</p>
      </div>

      {/* Leaderboard image */}
      <div className="flex justify-center">
        <div className="relative w-[90%] max-w-md bg-gray-900 p-4 rounded-lg">
          <img
            src={leaderboardImage}
            alt="Leaderboard"
            className="w-full rounded-lg"
          />
        </div>
      </div>

      {/* User information */}
      <div className="flex justify-between items-center bg-gray-800 p-4 mx-6 mt-4 rounded-lg">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl">
            MA
          </div>
          <div className="ml-3">
            <p>Macdonald Anyanwu</p>
            <div className="flex items-center">
              <img src={xrideCoin} alt="Xride Coin" className="w-4 h-4 mr-1" />
              <p>12k TaskList</p>
            </div>
          </div>
        </div>
        <p>Position #120</p>
      </div>

      {/* Other users list */}
      <div className="flex flex-col px-6 py-4 space-y-3 overflow-y-auto">
        {[
          {
            name: "Lindsey Herwitz",
            coins: "9,033,943 X tokens",
            position: "#4",
          },
          { name: "Corey Lubin", coins: "8,203,489 X tokens", position: "#5" },
          {
            name: "Giana Dokidis",
            coins: "7,203,489 X tokens",
            position: "#6",
          },
          { name: "Giana Herwitz", coins: "800,089 X tokens", position: "#7" },
          { name: "Talan Baptista", coins: "760,089 X tokens", position: "#8" },
          { name: "Charlie Torff", coins: "300,089 X tokens", position: "#9" },
        ].map((user, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                  index % 2 === 0 ? "bg-blue-500" : "bg-pink-500"
                }`}
              >
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="ml-3">
                <p>{user.name}</p>
                <div className="flex items-center">
                  <img
                    src={xrideCoin}
                    alt="Xride Coin"
                    className="w-4 h-4 mr-1"
                  />
                  <p>{user.coins}</p>
                </div>
              </div>
            </div>
            <p>{user.position}</p>
          </div>
        ))}
      </div>

      {/* Bottom navigation bar */}
      <div className="absolute bottom-0 w-full bg-gray-900 px-4 py-4 flex justify-between items-center text-white">
        <img
          src={HomeIcon}
          alt="Home"
          className="footer-icon w-6 h-6 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <img
          src={LeaderboardIcon}
          alt="Leaderboard"
          className="footer-icon w-6 h-6 cursor-pointer"
          onClick={() => navigate("/leaderboard")}
        />
        <img
          src={TasksIcon}
          alt="Tasks"
          className="footer-icon w-6 h-6 cursor-pointer"
          onClick={() => navigate("/task-lists")}
        />
        <img
          src={InviteFriendIcon}
          alt="Invite Friend"
          className="footer-icon w-6 h-6 cursor-pointer"
          onClick={() => navigate("/invite-friends")}
        />
        <img
          src={WalletIcon}
          alt="Wallet"
          className="footer-icon w-6 h-6 cursor-pointer"
          onClick={() => navigate("/wallet")}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
