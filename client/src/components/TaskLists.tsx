import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TelegramIcon from "../images/telegram_icon.png";
import LinkedInIcon from "../images/linkedin_icon.png";
import TwitterIcon from "../images/twitter_icon.png";
import InviteFriendIcon from "../images/invite-friend.png";
import DiscordIcon from "../images/discord_icon.png";
import YoutubeIcon from "../images/youtube_icon.png";
import ClaimIcon from "../images/claim-icon.png";
import HomeIcon from "../images/home.png";
import TasksIcon from "../images/tasks-icon.png";
import WalletIcon from "../images/wallet-icon.png";
import LeaderboardIcon from "../images/leaderboard-icon.png";
import CheckmarkIcon from "../images/checkmark.png";

interface Task {
  title: string;
  reward: string;
  icon: string;
  link?: string;
  completed?: boolean;
}

interface TaskListProps {
  onClose: () => void;
}

const TaskList: React.FC<TaskListProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const initialTasks: Task[] = [
    {
      title: "Join our Telegram channel",
      reward: "5000 X tokens",
      icon: TelegramIcon,
      link: "https://t.me/Xride_Official",
      completed: false,
    },
    {
      title: "Follow us on LinkedIn",
      reward: "5000 X tokens",
      icon: LinkedInIcon,
      completed: false,
    },
    {
      title: "Follow us on X(Twitter)",
      reward: "5000 X tokens",
      icon: TwitterIcon,
      link: "https://twitter.com/Xride_io",
      completed: false,
    },
    {
      title: "Invite 5 of your friends to Xride",
      reward: "5000 X tokens",
      icon: InviteFriendIcon,
      link: "/invite-friends",
      completed: false,
    },
    {
      title: "Join Xride Discord",
      reward: "5000 X tokens",
      icon: DiscordIcon,
      link: "https://discord.com/invite/2d7J2aAWSy",
      completed: false,
    },
    {
      title: "Subscribe to Xride Youtube channel",
      reward: "5000 X tokens",
      icon: YoutubeIcon,
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [claimedTokens, setClaimedTokens] = useState<number>(0);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    if (savedTasks.length > 0) {
      setTasks(savedTasks);
    }
  }, []);

  const handleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleClaimTokens = () => {
    const totalReward = tasks.reduce((total, task) => {
      if (task.completed) {
        const rewardAmount = parseInt(task.reward.replace(" X tokens", ""));
        return total + rewardAmount;
      }
      return total;
    }, 0);

    setClaimedTokens(claimedTokens + totalReward);
    localStorage.setItem(
      "claimedTokens",
      JSON.stringify(claimedTokens + totalReward)
    );
    // Reset tasks or update UI accordingly
  };

  const handleInviteClick = () => {
    navigate("/invite-friends"); // Navigate to Invite Friends component
  };

  return (
    <div className="relative h-screen bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Task List 🔥</h1>

      {/* Daily Tasks Section */}
      <div className="bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-bold">Claim your daily reward</p>
            <p className="text-yellow-400 font-bold">5000 X tokens</p>
          </div>
          <button
            className="bg-yellow-500 text-black text-xs font-bold px-4 py-2 rounded-full"
            onClick={handleClaimTokens}
          >
            Claim Now
          </button>
        </div>
      </div>

      {/* Your Tasks Section */}
      <div className="space-y-4 mb-24">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-800 p-4 rounded-lg"
          >
            <img src={task.icon} alt={task.title} className="w-8 h-8 mr-4" />
            <div className="flex-grow">
              <p className="text-sm font-bold">
                {task.link ? (
                  <a
                    href={task.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:underline"
                  >
                    {task.title}
                  </a>
                ) : (
                  task.title
                )}
              </p>
              <p className="text-xs text-gray-400">Reward: {task.reward}</p>
            </div>
            {task.completed ? (
              <img
                src={CheckmarkIcon}
                alt="Completed"
                className="w-6 h-6 text-green-500"
              />
            ) : task.title === "Invite 5 of your friends to Xride" ? (
              <button
                className="bg-yellow-500 text-black text-xs px-4 py-1 ml-auto rounded-full"
                onClick={handleInviteClick}
              >
                Invite
              </button>
            ) : (
              <button
                className="bg-gray-700 text-white text-xs px-4 py-1 ml-auto rounded-full"
                onClick={() => handleTaskCompletion(index)}
              >
                Start
              </button>
            )}
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="absolute top-4 right-4 bg-gray-700 text-white px-4 py-2 rounded-full"
      >
        Back to Game
      </button>

      {/* Invite a Friend Button */}
      <button
        onClick={handleInviteClick}
        className="bg-yellow-500 text-black px-4 py-4 rounded-lg w-auto absolute bottom-16 left-4 right-4"
      >
        Invite a Friend
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

export default TaskList;
