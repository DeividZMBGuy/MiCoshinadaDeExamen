const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 2000;

app.use(bodyParser.json({limit: '100mb'}));
app.use(cors());

//endpoint
app.get('/click', (req, res) =>{
    res.send({"response":"Oi this is a greeting"})
});

app.post('/api/postname', (req, res) =>{
    var bodyOfRequestHereBrah = req.body;
    var theNameThatISent = bodyOfRequestHereBrah.name;
    res.send(theNameThatISent);
});

app.listen(port, function(){
    console.log("Live on the port")
});
