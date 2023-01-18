/*Below is an example show how websockets can be set up
  on the server in order to achieve real time communication */

const express = require("express"); //Importing Express library

//importing the http and websockets libraries which we are going to use
const http = require("http");
const WebSocket = require("ws");

//creating a server using an instance of express library

const app = express();
const server = http.createServer(app);

//creating a web socket and embedding the web server
const wss = new WebSocket.Server({ server });

wss.on("connection", (ws) => {
	//when the connection event is detected the server prints
	//the following line to the console

	console.log("connection established");

	ws.on("data", (data) => {
		//when the data event is detected the server prints
		//the following datais printed to the console
		// and send back
		console.log(`Received message is ${data}`);
		ws.send(data);
	});
});

server.listen(5000, () => {
	console.log(`Server started on port 5000`);
});
