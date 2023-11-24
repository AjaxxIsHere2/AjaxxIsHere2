const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const dotnev = require('dotenv');
dotnev.config({path: "./data.env"});
const path = require('path');
const { promisify } = require('util');
const app = express();
const port = 5000;

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/register', (req, res) => {
    res.render('register');

});

router.get('/profile', (req, res) => {
    res.render('profile');

});

router.get('/index', (req, res) => {
    res.render('index');

});

module.exports = router;