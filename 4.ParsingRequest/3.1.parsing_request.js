// buffer mei chunks encode ho jaate hai (POST)

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
		// here ---
		// This code is part of a Node.js HTTP server that listens for incoming HTTP POST requests and processes the body of the request. It collects chunks of data, concatenates them, and then parses them into a JavaScript object.
		const body = []; // This initializes an empty array called body, which will be used to store chunks of data received from the request (req).

		// The "data" event is triggered each time a new chunk of data is received from the client.
		// The (chunk) is a Buffer object (a raw binary representation of the data).
		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk); // Each chunk is then pushed into the body array.
		});
		req.on("end", () => {
			// The "end" event triggers when all the chunks have been received. This means the full request body is now available and we can process it.
			const fullBody = Buffer.concat(body).toString();
			console.log(fullBody); // username=hannah&gender=female
			// Buffer.concat(body) combines all the buffer chunks into one complete Buffer.
			// .toString() converts the Buffer to a readable string.
			// The resulting fullBody is a URL-encoded string, which looks like {username=hannah&gender=female}

			// URLSearchParams is a built-in JavaScript class that helps parse URL-encoded data.
			// It converts the string "username=hannah&gender=female" into a search parameter object.
			// Parses the URL-encoded string into key-value pairs.
			const params = new URLSearchParams(fullBody); // params = parameters

			const jsonObject = {}; // request body

			// params.entries() returns an iterator containing key-value pairs.
			// We loop through each key-value pair and add them to the jsonObject.
			// We use a loop to convert params into a JavaScript object:
			for (const [key, val] of params.entries()) {
				jsonObject[key] = val;
			}
			console.log(jsonObject); // { username: 'hannah', gender: 'female' }
		});

		fs.writeFileSync("user.txt", "Shreya");
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
