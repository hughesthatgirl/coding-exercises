const http = require('http');

const PORT1 = 7000;
const PORT2 = 7500;

const quotes = ['quote1', 'quote2', 'quote3']

function randomQuote(arr){
    return arr[Math.floor(Math.random()*arr.length)];
};

function handleRequest(request, response){

    response.end(randomQuote(quotes));
}

const server1 = http.createServer(handleRequest);
const server2 = http.createServer(handleRequest);


server1.listen(PORT1, function(){
    console.log(`Server listening on: http://localhost: ${PORT1}`);
});

server2.listen(PORT2, function(){
    console.log(`Server listening on: http://localhost: ${PORT2}`);
});