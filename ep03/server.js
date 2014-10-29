var http = require('http'),
    fs = require('fs'),
    server = http.createServer(onRequest);

function onRequest(req, res) {
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Hello World\n');
    } 
    else if (req.url === '/marketing') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Buy allz teh productz\n');
    } 
    else if (req.url === '/uploads') {
        if (req.method === "POST") {
            var upload = ""

            req.on("data", function(chunk) {
                upload += chunk
                console.log("chunk: ", chunk)
            })

            req.on("end", function() {
                console.log("Handling the upload: ", upload.length)
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.end('handling it')
            })
        } 
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            var writeStream = fs.createReadStream('index.html');
            writeStream.pipe(res);
        }
    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Page not found.\n');
    }
}

server.listen(1337);

console.log('Server running at http://127.0.0.1:1337/');