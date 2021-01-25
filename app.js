//import express from 'express'
const express = require('express');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 3000;

const app = express();

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	fs.readFile('./videos.json','utf8',(err,data) => {
		const videos = JSON.parse(data);
		res.render('index', {title:'Myndbandasida', videos:videos.videos});
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

