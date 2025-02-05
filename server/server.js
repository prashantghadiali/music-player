const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const app = express();
const bodyParser=require('body-parser');
const path = require('path')
const cors = require('cors');

const db = require('./config/mongoose.js');

// const allowedOrigins = [
//     'http://localhost:3000',    // Frontend development server
//     // 'https://your-production-app.com',  // Production frontend 
//   ];

// Used express.urlencoded with extended option
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
// app.use(express.json())

// Serve static files (songs)
app.use('/songs', express.static(path.join(__dirname, 'public', 'songs')));

app.use('/v1', require('./routes'));


app.listen(process.env.PORT, function(err){
    if (err){
        console.log(`Error in running the server: ${err}`); 
    }

    console.log(`Server is running on port: ${process.env.PORT}`);
});