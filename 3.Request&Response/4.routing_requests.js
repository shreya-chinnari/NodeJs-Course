const http = require("http");
const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);

	if (req.url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Node Js</title></head>");
		res.write("<body><h1>Home Page</h1></body>");
		res.write("</html>");
		res.end();
		return res / end();
	} else if (req.url === "/products") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Node Js</title></head>");
		res.write("<body><h1>Products</h1></body>");
		res.write("</html>");
		res.end();
		return res / end();
	} else {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Node Js</title></head>");
		res.write("<body><h1>Default responseeee</h1></body>");
		res.write("</html>");
		res.end();
		return res / end(); //optional, since last line
	}
});

const PORT = 3007;
server.listen(PORT, () => {
	console.log(`Server is running on address http://localhost:${PORT}`);
});
