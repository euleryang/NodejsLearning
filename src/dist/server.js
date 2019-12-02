const express = require("express");
const app = express();
app.get('/', function (req, res) {
    res.send('hello world!');
});
const server = app.listen(3001, function () {
    console.log('Listen on port 3001');
});
//# sourceMappingURL=server.js.map