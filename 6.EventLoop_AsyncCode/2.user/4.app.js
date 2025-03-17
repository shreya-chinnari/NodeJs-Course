const http = require("http");
const requestHandler = require("./4.using_modules"); // add
const server = http.createServer(requestHandler); // pass it

const PORT = 3024;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});
