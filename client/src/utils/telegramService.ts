// src/utils/telegramService.ts

const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;

if (!botToken) {
  throw new Error('Telegram bot token is not defined in environment variables.');
}

export const sendMessage = async (chatId: string, text: string) => {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`Telegram API Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error; // Re-throw error after logging
  }
};
