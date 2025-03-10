const http = require("http");
/*
   function requestListener(req, res) {
      console.log(req);
   }
   http.createServer(requestListener); 
*/
http.createServer(function(req, res) {
   console.log(req);
}); // anonymous function, whn no neeed to reuse

