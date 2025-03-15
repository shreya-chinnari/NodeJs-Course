// page that shows a nav bar : links - { home, men, women, kids, cart }

const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);

	if (req.url === "/Home") {
		res.write("<h1>Welcome to Home</h1>");
		return res.end();
	} else if (req.url === "/Men") {
		res.write("<h1>Welcome to Men's collection</h1>");
		return res.end();
	} else if (req.url === "/Women") {
		res.write("<h1>Welcome to Women's collection</h1>");
		return res.end();
	} else if (req.url === "/Kids") {
		res.write("<h1>Welcome to Kid's collection</h1>");
		return res.end();
	} else if (req.url === "/Cart") {
		res.write("<h1>Welcome to Cart</h1>");
		return res.end();
	} else {
		res.write(`
         <html>
         <head><title> NavBar </title></head>
         <body>
         <head>
         <nav>
         <ul>
         <li> <a href="/Home">Home </a></li>
         <li> <a href="/Men">Men</a></li>
         <li> <a href="/Women">Women</a></li>
         <li> <a href="/Kids">Kids</a></li>
         <li> <a href="/Cart">Cart</a></li>
         </ul>
         </nav>
         </head>
         </body>
         </html>`);
	}
});

server.listen(3013, () => {
	console.log("Server running on address http://localhost:3013");
});
