const express = require('express');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 3000;

const app = express();

app.locals.time = require('./src/time');
app.locals.teitur = "HELLO TEITUR";

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	console.log("hello teitur");
	fs.readFile('./videos.json','utf8',(err,data) => {
		const videos = JSON.parse(data);
		res.render('index', {title:'Myndbandasida', videos:videos.videos, categories:videos.categories});
		console.log(videos.videos.length);
		console.log(typeof(videos.videos));
	});
});

app.use((req,res) => {
	res.send("fuck off teitur");	
});

app.listen(port,host,() => {
	console.log(
	`server @ http://${host}:${port}`,
	);
});

