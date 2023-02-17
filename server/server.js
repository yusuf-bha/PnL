const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const api = require('./controllers/api.js');

app.use(express.json());
app.use(express.static('client'));

app.get('/', (req, res) => {
    console.log("request recived");
    return res.status(200).sendFile('../client/index.html');
})

app.post('/api', api.fetchData, (req, res) => {
    console.log("it works");
    return res.status(200).json(res.locals.output);  
})



app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

module.exports = app;