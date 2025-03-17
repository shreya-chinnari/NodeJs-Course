const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, this is your server response!");
});

console.log("1. Start of script");

// synchronous {blocking} operation

console.log("2. reading file synchronously");
const dataSync = fs.readFileSync("user_async.txt", "utf8");
console.log("3. synchronous read complete");

// asynchronous {non-blocking} operation

console.log("4. reading file asynchronously");
fs.readFile("user_async.txt", "utf8", (err, dataAsync) => {
	if (err) throw err;
	console.log("5. asynchronous read complete");
});

console.log("6. End of script");

const PORT = 3036;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});

// O/P

// 1. Start of script
// 2. reading file synchronously
// 3. synchronous read complete
// 4. reading file asynchronously
// 6. End of script
// Server is running on : http://localhost:3036
// 5. asynchronous read complete
