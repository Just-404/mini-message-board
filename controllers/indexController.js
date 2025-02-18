const db = require('../db');
const asyncHandler = require('express-async-handler');

const getMessages = asyncHandler(async (req, res) => {
    const messages = await db.getAllMessages();
        
    if(messages.length === 0) {
        res.status(404);
        throw new Error('No messages found');
    }

    return messages;
});

const addMessage = asyncHandler(async (req, res) => {
    const { authorName, messageText } = req.body;
    let message = { 
        text: messageText,
        user: authorName,
        added: new Date(),
    }
    const result = await db.addMessage(message);

    if(!result) {
        res.status(500);
        throw new Error('Message not added');
    }
});

module.exports = { getMessages, addMessage };