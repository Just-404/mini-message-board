const express = require('express');
const msgDetailsRouter = express.Router();
const { getMessageById } = require('../db');
const asyncHandler = require('express-async-handler');

msgDetailsRouter.get('/:id/details', asyncHandler(async  (req, res) => {
    const id = parseInt(req.params.id);
    const message = await getMessageById(id);

    res.render("msg-details", { message });
})
);

module.exports = msgDetailsRouter;