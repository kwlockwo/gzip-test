const express = require('express');
const compression = require('compression');
const app = express();

const port = process.env.PORT || 5050

app.use(express.json());
app.use((req, res, next) => {
    console.log(JSON.stringify(req.headers));
    next();
});

app.get('/compressed', compression(), function(req, res) {
    res.send('Hello World '.repeat(50000));
});

app.post('/compressed', compression(), function(req, res) {
    let data = req.body
    res.send(`Hello ${data.name} `.repeat(50000));
});

app.get('/notcompressed', function(req, res) {
    res.send('Hello World'.repeat(50000));
});

app.listen(port, function(err) {
    if (err) console.log(err);
    console.log(`Server listening on PORT ${port}`);
});
