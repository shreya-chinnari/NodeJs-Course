const http = require("http");
const server = http.createServer((req, res) => {
	console.log(req.url, req.method, req.headers);
	// process.exit();
});

const PORT = 3007;
server.listen(PORT, () => {
	console.log(`Server is running on address http://localhost:${PORT}`);
});

/*
TERMINAL LOG:

URL - \
METHOD - GET
ADDRESS - {all other things}

Server is running on address http://localhost:3007
/ GET {
  host: 'localhost:3007',
  connection: 'keep-alive',
  'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-platform': '"Windows"',
  'upgrade-insecure-requests': '1',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,**;q=0.8,application/signed-exchange;v=b3;q=0.7',
  'sec-fetch-site': 'none',
  'sec-fetch-mode': 'navigate',
  'sec-fetch-user': '?1',
  'sec-fetch-dest': 'document',
  'accept-encoding': 'gzip, deflate, br, zstd',
  'accept-language': 'en-US,en;q=0.9,hi;q=0.8'
}
*/
