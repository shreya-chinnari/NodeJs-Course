const http = require('http');
/*
   This imports the built-in HTTP module in Node.js.
   
   The http module allows us to create an HTTP server and handle incoming requests.
   
   http is now a variable that holds the reference to the HTTP module.

*/ 

function requestListener(req, res) {
   console.log(req);
}
/*
   This defines a callback function called requestListener.
   
   It takes two parameters:
      - request (or req) → Contains details about the incoming HTTP request (e.g., URL, headers, method).
      - response (or res) → Used to send data back to the client.
*/
http.createServer(requestListener); 

/*
   Creates an HTTP server, it takes a function callback (requestListener)
   
   Whenever a client (e.g., browser) makes a request, requestListener will be executed. 
*/