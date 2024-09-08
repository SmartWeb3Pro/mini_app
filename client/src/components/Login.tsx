import React, { useState } from "react";
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from "@react-oauth/google";
import googleLogo from "../images/google_logo.png"; // مسیر تصویر گوگل

interface LoginProps {
  onLogin: (username: string) => void;
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+98");
  const [username, setUsername] = useState("");
  const [showUsernameInput, setShowUsernameInput] = useState(false);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
  const [roleSelection, setRoleSelection] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePhoneNumberSubmit = () => {
    setRoleSelection(true);
  };

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    setShowUsernameInput(true);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleLogin = () => {
    if (username.trim() !== "") {
      setShowWelcomeMessage(true);
      setTimeout(() => {
        onLogin(username);
      }, 2000);
    }
  };

  const handleGoogleSuccess = (response: CredentialResponse) => {
    console.log(response);
    const googleUsername = "googleUser";
    setUsername(googleUsername);
    setShowWelcomeMessage(true);
    setTimeout(() => {
      onLogin(googleUsername);
    }, 2000);
  };

  // Adding the ability to trigger actions with the Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (!roleSelection && !showUsernameInput) {
        handlePhoneNumberSubmit();
      } else if (showUsernameInput && !showWelcomeMessage) {
        handleLogin();
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-end">
      <div className="bg-black text-white p-8 rounded-t-lg w-full max-w-screen-sm">
        <h2 className="text-xl font-bold mb-6 text-center">
          Begin your journey with Xride
        </h2>

        {!roleSelection && !showUsernameInput && (
          <>
            <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
              <div className="flex justify-center mb-6">
                <button className="w-full flex items-center justify-center bg-gray-800 p-2 rounded-full">
                  <img
                    src={googleLogo}
                    alt="Google Logo"
                    className="w-6 h-6 mr-3"
                  />
                  <span className="text-white">Continue with Google</span>
                </button>
              </div>
            </GoogleOAuthProvider>

            <div className="my-6 flex justify-center">
              <p>or</p>
            </div>

            <div className="flex space-x-2 mb-4">
              <input
                type="text"
                value={countryCode}
                onChange={(e) => setCountryCode(e.target.value)}
                className="w-16 p-3 rounded bg-gray-700 text-white"
                placeholder="+98"
              />
              <input
                type="text"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="flex-grow p-3 rounded bg-gray-700 text-white"
                placeholder="Phone Number"
                onKeyPress={handleKeyPress}
              />
            </div>
            <button
              onClick={handlePhoneNumberSubmit}
              className="w-full bg-yellow-500 text-black py-2 rounded-full text-lg font-semibold"
            >
              Proceed
            </button>
          </>
        )}

        {roleSelection && !showUsernameInput && (
          <>
            <h3 className="text-lg font-bold mb-4 text-center">
              What will be your role in the xride ecosystem?
            </h3>
            <div className="flex flex-col space-y-2 mb-4">
              {[
                "Driver",
                "Passenger",
                "Brand Ambassador",
                "Community Member",
              ].map((role) => (
                <button
                  key={role}
                  onClick={() => handleRoleSelect(role)}
                  className={`w-full py-2 rounded-full text-lg font-semibold ${
                    selectedRole === role
                      ? "bg-yellow-500 text-black"
                      : "bg-gray-700 text-white"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </>
        )}

        {showUsernameInput && (
          <>
            {showWelcomeMessage && (
              <div className="mb-4 text-center">
                <p className="text-lg font-bold">Welcome, {username}!</p>
                <p className="text-sm">We are preparing your adventure...</p>
              </div>
            )}
            {!showWelcomeMessage && (
              <input
                type="text"
                value={username}
                onChange={handleUsernameChange}
                className="w-full p-3 rounded bg-gray-700 text-white mb-4"
                placeholder="Enter Username"
                onKeyPress={handleKeyPress}
              />
            )}
            {!showWelcomeMessage && (
              <button
                onClick={handleLogin}
                className="w-full bg-yellow-500 text-black py-2 rounded-full text-lg font-semibold"
              >
                Proceed
              </button>
            )}
          </>
        )}

        <button
          onClick={onClose}
          className="mt-4 w-full text-sm text-gray-400 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Login;
