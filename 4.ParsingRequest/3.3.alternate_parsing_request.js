const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method);
	if (req.url === "/") {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Form for Users</title></head>");
		res.write("<body>");
		res.write("<h1>Fill up this Form : </h1>");
		res.write('<form action="/submit-details" method="POST">');
		res.write(
			'<input type="text" id="name" name="username" placeholder="Enter your Name :">  <br><br>'
		);
		res.write('<label for="gender"> Gender: </label>');
		res.write('<label for="male">Male</label>');
		res.write('<input type="radio" id="male" name="gender" value="male" />');
		res.write('<label for="female">Female</label>');
		res.write(
			'<input type="radio" id="female" name="gender" value="female"  /> <br>'
		);
		res.write('<input type="submit" value="Submit">');
		res.write("</form>");
		res.write("</body>");
		res.write("</html>");
		return res.end();
	} else if (
		req.url.toLowerCase() === "/submit-details" &&
		req.method === "POST"
	) {
		const body = [];
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on("end", () => {
			const fullBody = Buffer.concat(body).toString();
			console.log(fullBody);
			const params = new URLSearchParams(fullBody);

			// const jsonObject = {};
			// for (const [key, val] of params.entries()) {
			//    jsonObject[key] = val;
			// }

			const jsonObject = Object.fromEntries(params);
			console.log(jsonObject);
			fs.writeFileSync("user.txt", JSON.stringify(jsonObject)); // in user.txt ----> {"username":"lalala","gender":"male"}
		});

		// fs.writeFileSync("user.txt", "Shreya");
		res.statusCode = 302;
		res.setHeader("Location", "/");
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>Node Js</title></head>");
	res.write("<body><h1>Default responseeee</h1></body>");
	res.write("</html>");
	res.end();
	return res.end();
});

const PORT = 3011;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});
