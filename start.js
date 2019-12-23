const express = require('express');
const app = new express();

app.get('/', (request, response) => {
	response.send("hello heroku");
	//response.sendFile('index.html');
});

app.listen(process.env.PORT || 5000)