const path = require("path");
const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    let filePath = path.join(__dirname, "index.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/about.html") {
    let filePath = path.join(__dirname, "views", "about.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/contact.html") {
    let filePath = path.join(__dirname, "views", "contact.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(200, { "content-Type": "text/html" });
      response.end(data);
    });
  }
  if (request.url === "/homee.html") {
    let filePath = path.join(__dirname, "views", "homee.html");
    fs.readFile(filePath, "utf8", (err, data) => {
      response.writeHead(301, {
        "content-Type": "text/html",
        // 'Location': "../index.html", 
      });
      response.end(data);
      if (err) {
        console.log(err);
      }
    });
  }
});
const port = 5000;

server.listen(port, () => {
  console.log(`Server running on ${port}`);
});
