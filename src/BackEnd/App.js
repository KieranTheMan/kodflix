const express = require('express');
const app = express();
const port = 3001;
const shows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(shows()));
app.get('/', (req, res) => res.send('this is our server root'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));