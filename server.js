const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser')

const databasPath = './dist/assets/database.json';

const addToStatusDatabase = (statusJSON) => {
  fs.writeFile(databasPath, statusJSON, function (err) {
    if (err) throw err;
    console.log('database updated');
  });
}

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8887');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const jsonParser = bodyParser.json()

app.get('/status', (req, res) => {
  fs.readFile(databasPath, function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.post('/status', jsonParser,  (req, res) => {
  fs.readFile(databasPath, function(err, data) {
    const statusJSON = JSON.stringify(req.body);
    res.send(statusJSON);
    addToStatusDatabase(statusJSON);
  });
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
