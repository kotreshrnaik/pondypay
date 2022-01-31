require("dotenv").config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// const db = mysql.createConnection({
//     user: "root",
//     host: "localhost",
//     password: "",
//     database: "pondybay",
// })

// app.get('/api', (req, res) => {
//     res.json({
//         success: 1, 
//         message: "This rest API is working"
//     })
// })

// app.listen(process.env.APP_PORT, () => { 
//     console.log("listening on port 4000")
// })