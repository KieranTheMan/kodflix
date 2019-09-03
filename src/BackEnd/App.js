const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const shows = require('./shows');
const path = require('path')

app.get('/rest/shows', (req, res) => res.send(shows()));
app.get('/', (req, res) => res.send('this is our server root'));

app.get('*', function (req, res) {
    res.sendfile(path.join(__dirname,'../../build'));
})
app.use(express.static(path.join(__dirname, '../../build', 'index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));