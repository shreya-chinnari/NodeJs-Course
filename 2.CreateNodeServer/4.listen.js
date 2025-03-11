const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req);
	// server = object that is returned upon creating the server
});

// we have to listen to the object

server.listen(3002); //port
// >> server has started listening


// open localhost:3002 in browser >> check terminal 