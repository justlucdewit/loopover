const express = require('express');
const app = new express();

app.get('/', (request, response) => {
	response.sendFile('index.html');
});