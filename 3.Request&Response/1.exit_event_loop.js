const http = require("http");
//The built-in Node.js http module is imported, which allows you to create an HTTP server.


const server = http.createServer((req, res) => {
	// creates an HTTP server that listens for requests.
	console.log(req);
	process.exit(); // stops event loop
	/*
   When a request is received, the callback function executes:
      - console.log(req); --- logs the request object (req), which contains details like method, URL, headers, etc.
      - process.exit(); --- immediately stops the Node.js process, terminating the server.

   */
});

const PORT = 3006;
server.listen(PORT, () => {
		console.log(`Server is running on address http://localhost:${PORT}`);
});
// The server starts listening on port 3006. A message "Server is running on port 3006" is logged to the console.


/*
The first time any request is made (e.g., opening http://localhost:3006 in a browser):
   - The request object (req) is logged.
   - process.exit(); is executed, which immediately stops the server.
As a result, the server will not be able to handle any further requests after the first one.
*/


/*
- The server starts and waits for requests.
- Upon receiving the first request, it logs the request object and shuts down immediately.
- No response is sent to the client because res.end() is missing.
- If you try to make a second request, it will fail because the server is already terminated.
 */