const express = require('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.static('client-static-website'));

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/public/index.html'));
});

app.listen(port, () => {
    console.log('server is running on port ' + port);
});