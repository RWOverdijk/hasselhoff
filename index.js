#!/usr/bin/env node

const wallpaper = require('wallpaper');
const fs = require('fs');
const path = require('path');
const images = fs.readdirSync(path.join(__dirname, 'img'));
const index = Math.floor(Math.random() * images.length);

wallpaper.set(path.join(__dirname, 'img', images[index])).then(() => {
	console.log('Your day just got hassel of a lot better.');
});
