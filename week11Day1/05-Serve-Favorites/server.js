const http = require("http");
const fs = require("fs");

const PORT = 8080;

const server = http.createServer(handleRequest);

function handleRequest(req, res){
    const path = req.url;

    switch (path) {

        case "/index":
            return homePage(res);
    
        case "/foods":
            return displayFoods(res);
    
        default:
            return display404(res);
    }
}

server.listen(PORT, function() {
    console.log("Server is listening on PORT: " + PORT);
});

function homePage(res){
    fs.readFile(`${__dirname}/index.html`, function(err, data) {
        if (err) throw err;

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function displayFoods(res){
    fs.readFile(`${__dirname}/foods.html`, function(err, data) {
        if (err) throw err;
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

function display404(res){
    fs.readFile(`${__dirname}/error.html`, function(err, data) {
        if (err) throw err;
        
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}