const http = require("http");
const { requestHandler } = require("./requestHandler");
const { sumRequestHandler } = require("./sum");
const server = http.createServer(requestHandler);

const PORT = 3072;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});
