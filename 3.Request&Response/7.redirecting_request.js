// This version of the server is different from the previous one because it:
// ✅ Uses the fs module to write data to a file (user.txt).
// ✅ Handles form submission (/submit-details) properly using POST.
// ✅ Redirects the user back to / after form submission using status code 302 (Found).

const http = require("http");
const fs = require("fs"); // A built-in module that allows us to work with the file system (reading, writing, modifying files).

const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	// if the request if for / (homepage), it responds with an HTML form
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
	}
	// modify
	// handling form submission (/submit-details)
	else if (
		req.url.toLowerCase() === "/submit-details" &&
		req.method === "POST"
		// This ensures the request is for /submit-details (case-insensitive). It matches the action="/submit-details" in the form.
		// This ensures only POST requests are processed.

		// Without checking req.method, a GET request to /submit-details would also be processed, which we don’t want.
	) {
		fs.writeFileSync("user.txt", "Shreya");
		res.statusCode = 302;
		res.setHeader("Location", "/");
		//Synchronous (Sync) operation: writeFileSync blocks execution until the file is written.
		// This is fine for small tasks, but for larger inputs, fs.writeFile() (asynchronous) is recommended.
		// 302 (Found) status code: Tells the browser: "This page has moved temporarily, go to a different URL." The user does not stay on /submit-details, they are automatically redirected to /.
		// res.setHeader("Location", "/"): Tells the browser to redirect to the homepage (/). After submitting the form, the user sees the form again.
	}

	res.setHeader("Content-Type", "text/html");
	res.write("<html>");
	res.write("<head><title>Node Js</title></head>");
	res.write("<body><h1>Default responseeee</h1></body>");
	res.write("</html>");
	res.end();
	return res.end();
	/*
	Handles form submission when /submit-details is requested via POST.

	Uses the fs module to write to a file:
	- fs.writeFileSync("user.txt", "Shreya");
	- This creates/overwrites a file user.txt with "Shreya".

	Redirects the user back to /:
	- res.statusCode = 302; → Sends a "Found" response, which tells the browser to redirect.
	- res.setHeader("Location", "/"); → Redirects to home page (/).
	*/
});

const PORT = 3011;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});

// user.txt file is created (in main folder)
