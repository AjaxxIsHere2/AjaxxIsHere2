-- Create the database
CREATE DATABASE IF NOT EXISTS user_auth;

-- Use the database
USE user_auth;

-- Create the Users table
CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100),
    email VARCHAR(100),
    password VARCHAR(255)
);
