const http = require("http");
const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>Node Js</title></head>");
	res.write("<body><h1>First Response</h1></body>");
	res.write("</html>");
	res.end();
});

const PORT = 3007;
server.listen(PORT, () => {
	console.log(`Server is running on address http://localhost:${PORT}`);
});

// run it and go to webpage
