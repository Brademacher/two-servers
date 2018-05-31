// Require/import HTTP module
var http = require("http");

// Defining first port to listen for
var PORT = 7000;
var PORT2 = 7500;

// Array of different negative responses
var meanResponses = ["You stupid dumb dumb dummy", "I hate your face. It's giving me cancer.", "Clearly you were picked last for dodgeball in school."];



// Creating generic function to handle requests and responses
function requestHandler(request, response) {

    // Send the below string to the client when the user visits PORT 7000
    response.end("Congratulations! You're a genius!");
}

// Creating second requestHandler function

function requestHandler2(request, response) {
    // Setting mathRandom for array value
    var randomResponse = meanResponses[Math.floor(Math.random() * meanResponses.length)];
    
    // Send the below string to the client when the user visits PORT 7000
    response.end(randomResponse);
}
// Node HTTP package to create the server.

var server = http.createServer(requestHandler);
var server2 = http.createServer(requestHandler2);

//start our server so that it can begin listening
server.listen(PORT, function () {

    // Logging (server-side) when our server has started
    console.log("Server is listening on: http://localhost:" + PORT);
});

//start our server so that it can begin listening
server2.listen(PORT2, function () {

    // Logging (server-side) when our server has started
    console.log("Server is listening on: http://localhost:" + PORT2);
});