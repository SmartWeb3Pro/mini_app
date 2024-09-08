import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StartScreen from "./components/StartScreen";
import Login from "./components/Login";
import TaskLists from "./components/TaskLists";
import Wallet from "./components/Wallet";
import FriendsScreen from "./components/FriendsScreen";
import Leaderboard from "./components/Leaderboard";
import MainScreen from "./components/MainScreen"; // Replaced GameScreen with MainScreen

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleStartPlaying = () => {
    if (!user) {
      setShowLogin(true);
    } else {
      setHasStarted(true);
    }
  };

  const handleLogin = (username: string) => {
    setUser(username);
    setShowLogin(false);
    setHasStarted(true);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseFriends = () => {
    // Handle closing FriendsScreen if needed
  };

  const handleNavigate = (path: string) => {
    // Implement navigation logic if needed
  };

  return (
    <Router>
      <div className="relative flex justify-center items-center h-screen bg-black">
        <Routes>
          <Route
            path="/"
            element={
              !hasStarted ? (
                <StartScreen onStart={handleStartPlaying} />
              ) : (
                <MainScreen user={user} /> // Now navigates to MainScreen
              )
            }
          />
          <Route
            path="/task-lists"
            element={
              <TaskLists
                onClose={() => {
                  // Implement onClose logic for TaskLists
                }}
              />
            }
          />
          <Route path="/wallet" element={<Wallet />} />
          <Route
            path="/invite-friends"
            element={
              <FriendsScreen
                onClose={handleCloseFriends}
                onNavigate={handleNavigate}
                username={user || ""}
              />
            }
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>

        {showLogin && (
          <Login onLogin={handleLogin} onClose={handleCloseLogin} />
        )}

        {showWelcome && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-20">
            <div className="bg-gray-800 text-white p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold">Welcome to Xride!</h2>
              <p className="mt-2 text-lg">
                Hang tight, we're getting things ready for you.
              </p>
              <div className="mt-4 animate-pulse">
                <div className="w-16 h-16 bg-yellow-500 rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
};

export default App;
