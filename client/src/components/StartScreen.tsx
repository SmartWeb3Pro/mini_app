import React from "react";
import { useNavigate } from "react-router-dom";
import xrideLogo from "../images/logo.png";
import startScreenImage from "../images/start-screen.png";
import TaskListsIcon from "../images/Tasks-icon.png";
import inviteFriendsIcon from "../images/invite-friend.png";
import WalletIcon from "../images/wallet-icon.png";
import "../App.css";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  const navigate = useNavigate();

  const iconData = [
    {
      title: "Daily X tokens",
      description: "Earn daily X rewards with virtual trips",
      icon: TaskListsIcon,
      route: "/task-lists",
    },
    {
      title: "Invite Friends",
      description: "10,000 USDT Referral campaign",
      icon: inviteFriendsIcon,
      route: "/invite-friends",
    },
    {
      title: "Boost your X tokens",
      description:
        "Mine your Digital ID and stake earned App reward tokens For governance token",
      icon: WalletIcon,
      route: "/wallet",
    },
  ];

  return (
    <div className="text-white text-center">
      <div className="relative w-[400px] mx-auto">
        <img
          src={startScreenImage}
          alt="Start Screen"
          className="w-full h-auto"
        />
        <img
          src={xrideLogo}
          alt="Xride Logo"
          className="absolute w-48 h-auto left-1/2 transform -translate-x-1/2 top-[80%]"
        />
      </div>
      <h1 className="text-2xl font-bold mt-16">
        Welcome to the Xride $500,000 airdrop campaign
      </h1>
      <p className="text-sm mt-2 mb-8">
        The world’s first Web3 Ride-sharing service provider
      </p>

      <div className="flex flex-col items-start w-[280px] mx-auto space-y-6">
        {iconData.map((icon, index) => (
          <div
            key={index}
            className="flex items-center cursor-pointer"
            onClick={() => navigate(icon.route)}
          >
            <img src={icon.icon} alt={icon.title} className="w-6 h-6 mr-4" />
            <div className="flex flex-col text-left">
              <p className="text-sm">{icon.title}</p>
              <p className="text-xs">{icon.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onStart}
        className="mt-8 bg-yellow-500 text-black font-bold py-2 px-6 rounded-full"
      >
        Start Playing
      </button>
    </div>
  );
};

export default StartScreen;
