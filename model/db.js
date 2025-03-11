let messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    id: 2,
    text: "Hello World",
    user: "Charles",
    added: new Date()
  },
];

let currentId = 3;

async function getAllMessages() {
  return messages
}

async function addNewMessage(message, userName) {
  const newMessage = {
    id: currentId,
    text: message,
    user: userName,
    added: new Date()
  };
  currentId++
  
  messages.push(newMessage);
}

module.exports = {getAllMessages, addNewMessage};