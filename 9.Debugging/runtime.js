const runtime = () => {
	console.log(x); // ReferenceError: x is not defined

	let num = 98;
	num(); // TypeError: num is not a function

	const fs = require("fs");
	fs.readFileSync("non-existent-file.txt"); // file not found
};

module.exports = runtime;
