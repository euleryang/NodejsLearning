// server.ts
const express = require("express");
const app = express();
app.get('/', function (req: any, res: { send: (arg0: any) => void; }) {
    res.send('hello world!');
});

const server = app.listen(3001, function () {
    console.log('Listen on port 3001');
});