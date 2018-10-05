const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');


const app = new express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        message: `Hello ${req.body.email}! You are now registered!`
    });
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});