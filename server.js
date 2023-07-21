const express = require('express');
const compression = require('compression');

const app = express();

const port = process.env.PORT || 5050

app.get('/compressed', compression(), function(req, res) {
    res.send('Hello World'.repeat(50000));
});

app.get('/notcompressed', function(req, res) {
    res.send('Hello World'.repeat(50000));
});

app.listen(port, function(err) {
    if (err) console.log(err);
    console.log(`Server listening on PORT ${port}`);
});