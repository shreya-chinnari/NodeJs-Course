const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);

	if (req.url === "/") {
		res.setHeader("Content-Type", "text/html");
		// without content-type : Browser: It will likely render correctly.
		// API clients (like Postman, curl): May assume text/plain, displaying raw HTML instead

		// Not required for HTML, but recommended for clarity and consistency. 
		// It is essential for JSON, XML, or file responses.
		return res.end();
	}
});

const PORT = 3010;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});
