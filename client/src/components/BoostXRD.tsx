import React from "react";
import { useNavigate } from "react-router-dom";
import WalletImage from "../images/index/WalletIcon.png"; // Boost X tokens icon
import HomeIcon from "../images/Home.png"; // Home icon
import LeaderboardIcon from "../images/Leaderboard-icon.png"; // Leaderboard icon
import TasksIcon from "../images/Tasks-icon.png"; // Tasks icon
import InviteFriendIcon from "../images/invite-friend.png"; // Invite Friend icon
import WalletIcon from "../images/wallet-icon.png"; // Wallet icon

const Wallet: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4">Boost Your X tokens</h1>
      <img src={WalletIcon} alt="Boost X tokens" className="w-40 h-auto mb-4" />
      <p className="text-center mb-8">
        Increase your chances with a boosted X tokens for even greater rewards.
        Learn how to get the most out of your X tokens investments.
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-bold"
      >
        Back to Game
      </button>

      {/* Bottom Navigation Bar */}
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
          onClick={() => navigate("/X tokens")}
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
          onClick={() => navigate("/boost-X tokens")}
        />
      </div>
    </div>
  );
};

export default Wallet;
