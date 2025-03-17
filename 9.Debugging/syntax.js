const testingSyntax = () => {
	console.log("ho ho ho testingSyntaxx");

	// Error: Unexpected token n in JSON at position 1
	let jsonString = "{name : 'Shreya'}"; // let jsonString = '{"name": "Shreya"}';
	let parsedData = JSON.parse(jsonString);
	console.log(parsedData);
};

module.exports = testingSyntax;
