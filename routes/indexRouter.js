const { Router } = require('express');
const indexRouter = Router();   
const { getMessages, addMessage } = require('../controllers/indexController');

indexRouter.get('/', async (req, res) => {
    
    res.render('index', { title: 'Mini Messageboard', messages: await getMessages() });
});

indexRouter.get('/new', (req, res) => {
    res.render('form', { title: 'New Message'})
});

indexRouter.post('/new', (req, res) => {
    addMessage(req, res);

    res.redirect('/');
});
module.exports = indexRouter;