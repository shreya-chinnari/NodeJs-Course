// <Buffer 75 73 65 72 6e 61 6d 65 3d 74 74 65 72 26 67 65 6e 64 65 72 3d 66 65 6d 61 6c 65> - we read the chunk, now we put them in a buffer and transform to meaningful data

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
		// here
		const body = []; //empty array

		req.on("data", (chunk) => {
			console.log(chunk);
			body.push(chunk); // push chunk to the array
		});

		// when chunks aana band ho jaye
		req.on("end", () => {
			const fullBody = Buffer.concat(body).toString(); // convert array to string, add all chunks (concat)
			console.log(fullBody);
		});
		/*
         / GET
         /favicon.ico GET
         /submit-details POST
         <Buffer 75 73 65 72 6e 61 6d 65 3d 61 69 73 68 61 26 67 65 6e 64 65 72 3d 66 65 6d 61 6c 65>
         username=aisha+jain&gender=female *************** {concat ho kar ek string mei aa gaya}
         / GET ********************{When you submit the form, the request goes to /submit-details with a POST request. After processing the form data, the server redirects the client back to / (the homepage).}
         /favicon.ico GET
      */

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
