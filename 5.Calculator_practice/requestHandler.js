const { sumRequestHandler } = require("./sum");

const requestHandler = (req, res) => {
	console.log(req.url, req.method);

	// #home page -> link to calculator page
	if (req.url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write(`
			<html>
			<body>
				<h1>Welcome to Calculator</h1>

				<a href="/calculator">Go to Calculator</a>
			</body>
			</html>
		`);

		res.end();
		return;
	} else if (req.url.toLowerCase() === "/calculator") {
		res.setHeader("Content-Type", "text/html");
		res.write(`
			<html>
			<body>
				<h1>Entr 2 numbers to add  : </h1>
				<form action="/calculate-result" method="POST">
					<input type="text" placeholder="first" name="first"/>
					<input type="text" placeholder="second" name="second"/>
					<input type="submit" value="Sum"/>
				</form>
			</body>
			</html>
		`);

		res.end();
		return;
	} else if (
		req.url.toLowerCase() === "/calculate-result" &&
		req.method === "POST"
	) {
		sumRequestHandler(req, res);

		return;
	}
	res.setHeader("Content-Type", "text/html");
	res.write(`
			<html>
			<body>
				<h1>Error : 404</h1>

				<a href="/">Go to Home</a>
			</body>
			</html>
		`);

	res.end();
	return;
};

exports.requestHandler = requestHandler; //object
