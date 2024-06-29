const mongoose = require("mongoose");
const config = require("./config")

// connect with mongoose
mongoose.connect(config.mongoURI);

//database connection
const database = mongoose.connection;

// If any error in mongoose
database.on("error", console.error.bind(console, "Error Connecting to MongoDB"));

// It operated one time IF mongoose database is connected.
database.once('open', function(){
    console.log("Database Connected :: MongoDB");
    console.log("Click to go : http://localhost:3000");
})


module.exports = database;