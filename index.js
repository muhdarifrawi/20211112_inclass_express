// import Express 
// the argumnet to require must match the package name
// you can use any name for the variable - as tradition
const express = require("express");

// create an instance of express application
let app = express();

// start the server
// 3000 is the port number. Port numbers are basically "addresses" on your computer
app.get("/about", function(req, res){
    // req is request
    // res is response
    // I know this sounds dumb but don't switch their positions

    res.send("Hello World");
})

app.get("/", function(req, res){
    // req is request
    // res is response
    // I know this sounds dumb but don't switch their positions

    res.send("This is the index");
})

// start the server
// locally you can use localhost:3000
// and also the additional /<path> is you have
app.listen(3000, ()=>{
    console.log("Server started");
})
