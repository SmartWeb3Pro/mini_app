import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import XTokenIcon from "../images/xtoken-icon.png";
import XtokensIcon from "../images/X token.png";
import UsdtIcon from "../images/usdt-icon.png";
import TonIcon from "../images/ton-icon.png";
import HomeIcon from "../images/home.png";
import LeaderboardIcon from "../images/Leaderboard-icon.png";
import TasksIcon from "../images/Tasks-icon.png";
import InviteFriendIcon from "../images/invite-friend.png";
import WalletIcon from "../images/wallet-icon.png"; // Current wallet icon

const Wallet: React.FC = () => {
  const navigate = useNavigate();
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setFaqIndex(faqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the X token",
      answer:
        "X tokens are the tokens earned when you complete a task on the app",
    },
    {
      question: "What is the X tokens token",
      answer: "X tokens is a digital currency used in the Xride ecosystem.",
    },
    {
      question: "What Xride Digital ID and how its work in ecosystem",
      answer: "Xride Digital ID helps authenticate users in the Xride system.",
    },
    {
      question: "How can I Buy my Digital ID?",
      answer: "You can buy your Digital ID through the Xride app.",
    },
    {
      question: "When can I stake my X tokens?",
      answer: "You can stake your X tokens after accumulating 10,000 X tokens.",
    },
  ];

  return (
    <div className="relative h-screen bg-black text-white p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">
          Wallet <span>🤑</span>
        </h1>
        <p className="text-yellow-400">12,000 X Tokens</p>
        <a href="#" className="text-sm text-gray-400 underline">
          Stake X token to earn X tokens
        </a>
      </div>

      {/* Connect Wallet Section */}
      <div className="bg-gray-800 p-4 rounded-lg mb-4 flex justify-between items-center">
        <div>
          <p className="text-sm">Connect your TON wallet</p>
          <p className="text-yellow-400 text-xs">Earn 12,000X when you do</p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-lg font-bold">
          Connect
        </button>
      </div>

      {/* Wallet Balances */}
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center">
            <img src={XtokensIcon} alt="X tokens" className="w-8 h-8 mr-4" />
            <p className="text-sm font-bold">X tokens</p>
          </div>
          <p className="text-yellow-400 font-bold">$5000</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center">
            <img src={UsdtIcon} alt="USDT" className="w-8 h-8 mr-4" />
            <p className="text-sm font-bold">USDT</p>
          </div>
          <p className="text-yellow-400 font-bold">$5000</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
          <div className="flex items-center">
            <img src={TonIcon} alt="TON" className="w-8 h-8 mr-4" />
            <p className="text-sm font-bold">TON</p>
          </div>
          <p className="text-yellow-400 font-bold">$5000</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-6">
        <h2 className="text-lg font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <p className="text-sm font-bold">{faq.question}</p>
                <span>{faqIndex === index ? "–" : "+"}</span>
              </div>
              {faqIndex === index && (
                <p className="text-xs text-gray-400 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 w-full bg-gray-900 px-10 py-4 flex justify-between items-center text-white">
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
export default Wallet;
