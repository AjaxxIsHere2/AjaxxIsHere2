const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({path: './data.env'});
const path = require('path');
const app = express();
const port = 5000;

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    else{
        console.log('MySql Connected...');
    }
   
});

const publicdircetory = path.join(__dirname, './public');
app.use(express.static(publicdircetory));
app.set('view engine', 'hbs');



// req means grab something from the form
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});

