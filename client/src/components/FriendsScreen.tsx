import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../assets/react.svg";
import InviteFriendIcon from "../images/invite-friend.png";
import TasksIcon from "../images/Tasks-icon.png";
import WalletIcon from "../images/wallet-icon.png";
import CopyIcon from "../images/copy.png";
import xrideCoin from "../images/x-coin.png";
import LeaderboardIcon from "../images/Leaderboard-icon.png";

// Define props interface
interface FriendsScreenProps {
  onClose: () => void;
  onNavigate: (path: string) => void;
  username: string;
}

const FriendsScreen: React.FC<FriendsScreenProps> = ({
  onClose,
  onNavigate,
  username,
}) => {
  const navigate = useNavigate(); // Using useNavigate for navigation

  // State for copy message
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  // Generate a unique invite code for each user (mock example here)
  const generateInviteCode = () => {
    // Replace this with your own code generation logic
    return "1234567yhuj87gunuiun9intyghiou009g";
  };

  const inviteCode = generateInviteCode();
  const telegramBaseUrl = "https://t.me/share/url?url=";
  const inviteUrl = `${telegramBaseUrl}https://yourapp.com/invite?code=${inviteCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(inviteUrl); // Copy the unique invite link to clipboard
    setCopyMessage("Invite link copied to clipboard!"); // Set the copy message
    setTimeout(() => setCopyMessage(null), 2000); // Clear the message after 2 seconds
  };

  const handleInviteClick = () => {
    window.open(inviteUrl, "_blank"); // Open the invite link in a new tab
  };

  return (
    <div className="relative w-full h-screen bg-black text-white flex flex-col">
      {/* Invite friends section */}
      <div className="p-6 flex flex-col items-center">
        <div className="relative w-20 h-20 mb-4">
          <img
            src={xrideCoin}
            alt="Xride Coin"
            className="absolute inset-0 w-full h-full object-contain xride-coin"
          />
        </div>
        <h1 className="text-2xl font-bold text-center text-white">
          Invite your friends and earn more X tokens
        </h1>
        <p className="text-sm text-white mt-2">
          Earn <span className="text-yellow-400 font-bold">5,000</span> for you
          and your friends
        </p>
        <div className="mt-4 bg-gray-800 p-3 rounded-lg flex items-center justify-between w-full max-w-sm">
          <div className="flex-grow">
            <p className="font-mono text-sm">{inviteCode}</p>
          </div>
          <button
            onClick={handleCopyCode}
            className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center text-black"
          >
            <img src={CopyIcon} alt="Copy" className="w-4 h-4 mr-2" />
            <span>Copy</span>
          </button>
        </div>
        {copyMessage && (
          <p className="text-green-400 mt-2">{copyMessage}</p> // Display copy message
        )}
      </div>

      {/* Invite a friend button */}
      <button
        onClick={handleInviteClick}
        className="bg-yellow-500 text-black px-4 py-4 rounded-lg w-auto absolute bottom-16 left-4 right-4"
      >
        Invite a Friend
      </button>

      {/* Invited friends list */}
      <div className="flex-grow p-4 overflow-y-auto">
        <ul>{/* List of invited friends can go here */}</ul>
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
export default FriendsScreen;
