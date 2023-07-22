const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  const { message } = JSON.parse(event.body);

  if (message.text && message.text.trim() === '/chatid') {
    // If the user sends the "/chatid" command, send their chat ID back to them
    await sendMessage(message.chat.id, `Your Chat ID is: ${message.chat.id}`);
  }

  return { statusCode: 200 };
};
