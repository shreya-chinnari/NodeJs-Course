const logicalError = () => {
	let num = 6;
	if ((num = 10)) {
		console.log(num);
	} else {
		console.log("Error");
	}

	let arr = [1, 2, 3, 4, 5];
	for (let i = 0; i <= arr.length; i++) {
		console.log(arr[i]);
	}

	let number = "2";
	console.log(number + 5);
};

module.exports = logicalError;
