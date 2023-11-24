const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

exports.register = (req, res ) => {
    console.log(req.body);

    const {name, email, password, confirmPassword} = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email], (error, result) => {
        if(error) {
            console.log(error);
        }
        if(result.length > 0) {
            return res.render('register', {
                message: 'That email is already in use'
            })
        } 
        else if(password !== confirmPassword) {
            return res.render('register', {
                message: 'Passwords do not match'
            })
        }

        let hashedPassword = bcrypt.hashSync(password, 8);
        console.log(hashedPassword);

        // let token = jwt.sign({id: 1}




        // db.query('INSERT INTO users SET ?', {name: name, email: email, password: password}, (error, result) => {
        //     if(error) {
        //         console.log(error);
        //     } else {
        //         console.log(result);
        //         return res.render('register', {
        //             message: 'User registered'
        //         })
        //     }
        // })

        // db.end();

        // console.log(result);
        // console.log('Connected to database');
        // console.log(result);
        // console.log('Connected to database');
        // console.log(result);
        // console.log('Connected to database');
        // console.log(result);
        // console.log('Connected');

    })

    res.send("User Registered");
};






