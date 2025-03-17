const http = require("http");
const fs = require("fs");
// change
// const server = http.createServer((req, res) => {
const requestHandler = (req, res) => {
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

			const jsonObject = Object.fromEntries(params);
			console.log(jsonObject);
			// // BLOCKS EVERYTHING
			// fs.writeFileSync("user.txt", JSON.stringify(jsonObject));

			fs.writeFile("user_async.txt", JSON.stringify(jsonObject), (error) => {
				console.log("data written successfully");

				res.statusCode = 302;
				res.setHeader("Location", "/"); // moved here, ensures client ko rok ke rakhe, jab data poora write ho jaaye uske baad hi response jaaye client ko

				return res.end(); // added this
			});
		});
		// res.end() karne se pehle ye neeche wala code execute hoga, toh homepage pe chala jayega before user.txt file gets written -
		// res.statusCode = 302;
		// res.setHeader("Location", "/");
	} else {
		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Node Js</title></head>");
		res.write("<body><h1>Default responseeee</h1></body>");
		res.write("</html>");
		res.end();
		return res.end(); // now it gets redirected to home
	}

	// MOVE THIS CODE TO ELSE {} - OTHERWISE APNE AAP REDIRECT HO JAAYEGA
	// res.setHeader("Content-Type", "text/html");
	// res.write("<html>");
	// res.write("<head><title>Node Js</title></head>");
	// res.write("<body><h1>Default responseeee</h1></body>");
	// res.write("</html>");
	// res.end();
	// return res.end();
};

module.exports = requestHandler;
