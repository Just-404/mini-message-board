// Hardcoded database for testing purposes
let msgId = 1;
const messages = [
    {
      id: msgId++,
      text: "Hi there!",
      user: "Amando",
      added: new Date("2003-06-23")
    },
    {
      id: msgId++,
      text: "Hello World!",
      user: "Charles",
      added: new Date("2003-06-22")
    }
  ];

  const addMessage = async (message) => { 
    message.id = msgId++;
    messages.push(message) 
    return true;
  };
  const getAllMessages = async () => messages;
  const getMessageById = async (id) => messages.find(m => m.id === id);

  module.exports = { addMessage, getAllMessages, getMessageById };