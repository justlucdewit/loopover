const express = require('express');
const { resolve } = require("path") 

const PORT = process.env.PORT || 5000;
const app = new express();

app.use(express.static(resolve(__dirname, "app")));

//stylesheet
app.get('/style.css',(request,response)=>{response.sendFile('app/style.css',{root: __dirname})});

//sub pages
app.get('/home.html',(request, response)=>{
	console.log("someone opened home.html");
	response.sendFile('app/home.html',{root: __dirname});
});

app.get('/play.html',(request, response)=>{
	console.log("someone opened play.html");
	response.sendFile('app/home.html',{root: __dirname});	
});

app.get('/leaderboard.html',(request, response)=>{
	console.log("someone opened leaderboard.html");
	response.sendFile('app/home.html',{root: __dirname});
});

app.get('/news.html',(request, response)=>{
	console.log("someone loaded news.html");
	response.sendFile('app/home.html',{root: __dirname});
});

app.get('/explore.html',(request, response)=>{
	console.log("someone loaded explore.html");
	response.sendFile('app/home.html',{root: __dirname});
});

//default page
app.get('/',(request,response)=>{
	console.log("someone opened home.html");
	response.sendFile('app/home.html',{root: __dirname});
});



app.on('listening', () => {
	console.log(`SERVER RUNNING ON ${PORT}`)
});

app.listen(PORT);
