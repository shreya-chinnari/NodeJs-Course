const sumRequestHandler = (req, res) => {
	console.log("in sum request handler", req.url);
	const body = [];
	req.on("data", (chunk) => body.push(chunk));
	console.log(body);
	req.on("end", () => {
		const bodyStr = Buffer.concat(body).toString();
		console.log(bodyStr);
		const params = new URLSearchParams(bodyStr);
		const bodyObj = Object.fromEntries(params);
		console.log(bodyObj);
		const result = Number(bodyObj.first) + Number(bodyObj.second);
		console.log(result);

		res.setHeader("Content-Type", "text/html");
		res.write(`
			<html>
			<body>
				<h1>Your sum is : ${result}</h1>
			</body>
			</html>
		`);

		res.end();
	});
	// res.setHeader("Content-Type", "text/html");
	// res.write(`
	// 		<html>
	// 		<body>
	// 			<h1>Your sum is : ${result}</h1>
	// 		</body>
	// 		</html>
	// 	`);

	// res.end();

	// ye upar wala commented code pehle chalega phir const bodyStr-----
};

exports.sumRequestHandler = sumRequestHandler;
/**
 * first=1&second=3
{ first: '1', second: '3' }
13
 */

/* after Number()



first=12&second=33
{ first: '12', second: '33' }
45
 */
