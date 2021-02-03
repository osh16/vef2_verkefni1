const express = require('express');
const fs = require('fs').promises;
const util = require('util');

const router = express.Router();

async function readVideos() {
	const file = await fs.readFile('./videos.json');
	const json = JSON.parse(file);
	return json;
}

async function listVideos(req,res,next) {
	const json = await readVideos();
	res.render('index', {
		title:'Fræðslumyndbandaleigan', 
		videos:videos.videos, 
		categories:videos.categories
	});
}

async function findVideo(id, videos) {
	const json = await readVideos();	
}

module.exports = router;
