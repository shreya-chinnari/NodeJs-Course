const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req);
});

const PORT = 3003;

server.listen(PORT, () => {
	console.log(`Server running at http://loalhost:${PORT}`);
});

