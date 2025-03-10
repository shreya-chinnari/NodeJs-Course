// 1.

/*
   >> ls
   >> node first.js  -- it will execute/run the file
*/
console.log("yoyoy i am back");

// 2.

/*
   - fs.writeFile("output.txt", 'Writing File', callback) writes "Writing File" to output.txt.
   - If an error occurs, it prints "Error occurred".
   - Otherwise, it prints "File Written Successfully".
*/

/*
   O/P - created output.txt file and inside it is written : Writing File
 */
const fs = require('fs');
fs.writeFile("output.txt", 'Writing File', (err)=> {
	if (err) console.log("Error occured");
   else console.log('File Written Successfully');
})