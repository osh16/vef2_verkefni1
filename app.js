const express = require('express');
const fs = require('fs');
const path = require('path');

const host = '127.0.0.1';
const port = 3000;

const app = express();

app.locals.time = require('./src/time');

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	fs.readFile('./videos.json','utf8',(err,data) => {
		const videos = JSON.parse(data);
		res.render('index', {
			title:'Fræðslumyndbandaleigan', 
			videos:videos.videos, 
			categories:videos.categories
		});
	});
});

app.get('/:id', (req,res) => {
	fs.readFile('./videos.json','utf8',(err,data) => {
		const videos = JSON.parse(data);
		const id = req.params.id;
		var ret;
		for (var i = 0; i < videos.videos.length; i++) {
			if (videos.videos[i].id == Number(id)) {
				ret = videos.videos[i]
			}
		}
		if (!ret) {
			res.status(404).render('error', {
				title:"Síða fannst ekki",
				message:"Síða fannst ekki"
			});
		} else {
			console.log(ret);
			res.render('video', {
				title:ret.title,
				video:ret,
				videos:videos.videos
			});
		}
	});
});

app.listen(port,host,() => {
	console.log(
	`server @ http://${host}:${port}`,
	);
});

