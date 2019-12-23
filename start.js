const express = require('express');
const { resolve } = require("path") 


const PORT = process.env.PORT || 5000;
const app = new express();


app.use(express.static(resolve(__dirname, "app")));

app.get('/play.html',(request, response)=>{response.sendFile('app/home.html',{root: __dirname});});
app.get('/home.html',(request, response)=>{response.sendFile('app/home.html',{root: __dirname});});
app.get('/',(request,response)=>{response.sendFile('app/home.html',{root: __dirname});});

app.on('listening', () => {
	console.log(`SERVER RUNNING ON ${PORT}`)
});

app.listen(PORT);