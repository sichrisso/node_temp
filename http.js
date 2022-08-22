const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  }
  else if (req.url === "/about") {
    res.end("Here is our story");
  }else{
    res.end(`<h1>Oops!</h1>
    <p>Can't find the page you are looking for</p>
    <a href="/">Back</a>`);
  }
 
});

server.listen(5000);
