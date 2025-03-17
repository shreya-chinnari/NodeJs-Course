const fs = require("fs");
const http = require("http");
const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello, this is your server response!");
});

console.log("1. start of script");
// microtask queue (Promise), doesnt come under event queue, microtask queue has more priority than event queue
Promise.resolve().then(() => console.log("2. microtask 1"));

// timer queue
setTimeout(() => console.log("3. timer 1"), 0);

// I/O queue
fs.readFile("user.txt", () => console.log("4. I/O operation"));

// check queue
setImmediate(() => console.log("5. immediate 1"));

// close queue
process.on("exit", (code) => {
	console.log("6. exit event");
});

// end
console.log("7. End of script");

const PORT = 3006;
server.listen(PORT, () => {
	console.log(`Server is running on : http://localhost:${PORT}`);
});

// 1. start of script
// 7. End of script
// Server is running on : http://localhost:3006
// 2. microtask 1
// 3. timer 1
// 5. immediate 1
// 4. I/O operation
// 6. exit event
