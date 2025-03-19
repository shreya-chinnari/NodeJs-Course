const http = require("http");
const logicalError = require("./logical");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	testingSyntax(); //call
	runtime();
	logicalError();
});

const PORT = 3079;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});
