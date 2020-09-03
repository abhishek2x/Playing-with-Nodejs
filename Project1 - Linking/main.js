

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Links
const home = fs.readFileSync('./home.html');
const contact = fs.readFileSync('./contact.html');
const about = fs.readFileSync('./about.html');

const server = http.createServer((req, res) => {

    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Composing urls
    if(url == '/' || url == '/home')
        res.end(home);
    else if(url == '/contact')
        res.end(contact);
    else if(url == '/about')
        res.end(about);
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});