// src/api.js
export const sendPointsToServer = async (points) => {
    try {
        const response = await fetch("http://localhost:3001/api/updatePoints", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ telegramId: "user's telegram ID", points }),
        });
        const data = await response.json();
        console.log("Server response:", data);
    } catch (error) {
        console.error("Error sending points to server:", error);
    }
};
