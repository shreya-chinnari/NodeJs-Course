const sumRequestHandler = (req, res) => {
	console.log("1. In sum request handler", req.url); // 1
	const body = [];
	let result; // const --> let

	req.on("data", (chunk) => {
		body.push(chunk);
		console.log("2. Chunk Came");
	});
	console.log(body);
	req.on("end", () => {
		console.log("3. End Event came");
		const bodyStr = Buffer.concat(body).toString();
		const params = new URLSearchParams(bodyStr);
		const bodyObj = Object.fromEntries(params);
		result = Number(bodyObj.first) + Number(bodyObj.second);
		console.log(result);
	});
	console.log("4. Sending Response"); // 2
	res.setHeader("Content-Type", "text/html");
	res.write(`
			<html>
			<body>
				<h1>Your sum is : ${result}</h1>
			</body>
			</html>
		`);
	return res.end();
};

exports.sumRequestHandler = sumRequestHandler;
/*
1. In sum request handler /calculate-result
[]
4. Sending Response
2. Chunk Came
3. End Event came
 */

// 2,3 are callbacks
// 2 will run when data aa jaaye
// 3 will run when data end ho jaaye
// 2,3 are async --- baad mei chalega
