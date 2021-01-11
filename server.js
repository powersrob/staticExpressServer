const express = require('express');
const path = require('path');

const app = express();

app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/html', express.static(path.join(__dirname, 'html')));
app.use('/favicon.ico', express.static(path.join(__dirname, '/favicon.ico')));
app.use('/index.html', express.static(path.join(__dirname, '/index.html')));


app.get('/', (req, res) => {
	// either of these works
	// res.sendFile(__dirname + '/index.html');
	res.sendFile('index.html', { root: __dirname });
});

const port = 3000;
app.listen(port, function() {
	console.log(`http://localhost:${port}`);
});