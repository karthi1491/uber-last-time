const dotenv = require('dotenv')
dotenv.config();
const express = require('express');
const cors = require('cors')
const app = express();
const connectToDb = require('../Backend/db/db.js')
const userRoutes = require('../Backend/routes/user.routes.js');
const cookieParser = require('cookie-parser');

connectToDb();
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


app.get('/', (req, res) => {

    res.send('Hello world')
    })

    app.use('/users',userRoutes)
   



    module.exports = app;