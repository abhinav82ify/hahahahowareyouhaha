const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const port = process.env.PORT || 4201;

const mockQuestions = require('./mock-data/mockQuestions.json');

app.use(express.static(__dirname + '/dist/hahahahowareyouhaha'));

app.get('/api/survey-questions', (req, res) => {
    console.log("mock express server handling survey questions request");
    res.send(mockQuestions);
})

app.get('*', (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () => console.log(`Server running at port ${port}`));