const logicalError = () => {
	let num = 6;
	if ((num = 10)) {
		// assignment instead of comparision (===)
		console.log(num);
	} else {
		console.log("Error");
	} // prints 10

	let arr = [1, 2, 3, 4, 5];
	for (let i = 0; i <= arr.length; i++) {
		// < instead of <=
		console.log(arr[i]);
	} // arr.length is 5, but valid indices are 0 to 4. Your loop runs one extra iteration (i === 5), causing undefined to be logged.

	let number = "2";
	console.log(number + 5); // 25 
};

module.exports = logicalError;
