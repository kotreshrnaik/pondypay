require("dotenv").config();
const express = require('express');
const app = express();
const userRouter = require('./users/user.router');
const cors = require("cors");

app.use(express.json());
// app.use(cors({
//     origin: ['http://localhost:3000, http://localhost:4000'],
//     credentials: true
// }));
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


app.use('/api/users', userRouter);

app.listen(process.env.APP_PORT, () => { 
    console.log("listening on port:",process.env.APP_PORT)
})