const sendMessage = require("../../sendMessage");

exports.handler = async (event) => {
  console.log("Received an update from Telegram!", event.body);
  return { statusCode: 200 };
};

