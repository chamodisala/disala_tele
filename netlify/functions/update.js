const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);

  if (message.text && message.text.trim() === '/start') {
    // If the user sends the "/start" command, send a welcome message with the command buttons
    await sendMessage(message.chat.id, "Welcome! Here are some commands:", {
      reply_markup: {
        keyboard: [["/chatid"]],
        one_time_keyboard: true, // Hide the keyboard after the user makes a selection
        resize_keyboard: true, // Allow the keyboard to resize if more buttons are added
      },
    });
  } else if (message.text && message.text.trim() === '/chatid') {
    // If the user sends the "/chatid" command, send their chat ID back to them
    await sendMessage(message.chat.id, `Your Chat ID is: ${message.chat.id}`);
  }

  return { statusCode: 200 };
};
