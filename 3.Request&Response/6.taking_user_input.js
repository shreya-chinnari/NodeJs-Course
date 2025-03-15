const http = require("http");

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);

	if (req.url === "/") {
		res.setHeader("Content-Type", "text/html"); // Tells the browser that the response contains HTML content.
		res.write("<html>");
		res.write("<head><title>Form for Users</title></head>");
		res.write("<body>");
		res.write("<h1>Fill up this Form : </h1>");
		res.write('<form action="/submit-details" method="POST">');
		// URL changes to submit-details
		/*
		- is creates an HTML form that submits data to /submit-details.
		- thod="POST" → Specifies that data will be sent via a POST request.
		*/

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
		/*
		- The radio buttons are linked by name="gender" so that only one can be selected.
		- value="male" and value="female" → The values sent to the server when the form is submitted.
		*/
		res.write('<input type="submit" value="Submit">');
		res.write("</form>");
		res.write("</body>");
		res.write("</html>");
		return res.end();
	} else {
		// this else {} is important to get submit-details in URL
		// If the requested URL is NOT /, it sends a default response.
		// This ensures that /submit-details gets processed separately.

		res.setHeader("Content-Type", "text/html");
		res.write("<html>");
		res.write("<head><title>Node Js</title></head>");
		res.write("<body><h1>Default responseeee</h1></body>");
		res.write("</html>");
		res.end();
		return res.end();
	}
});

const PORT = 3011;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});
