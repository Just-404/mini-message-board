const express = require('express');
const app = express();
const path = require('path');
const assetsPath = path.join(__dirname, 'public');
const indexRouter = require('./routes/indexRouter');
const msgDetailsRouter = require('./routes/messageDetailsRouter');

const PORT = process.env.PORT || 3000;
app.use(express.static(assetsPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/", msgDetailsRouter);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(err.message);
})