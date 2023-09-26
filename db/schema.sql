DROP DATABASE IF EXISTS astrology_db;
CREATE DATABASE astrology_db;

USE astrology_db;

CREATE TABLE users (
id INT NOT NULL,
first_name VARCHAR(20) NOT NULL,
last_name VARCHAR(20) NOT NULL,
email VARCHAR(50) NOT NULL,
date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
); 

CREATE TABLE profile (
birthday VARCHAR(10),
birth_time VARCHAR(10),
birth_city VARCHAR(30),
sunSign VARCHAR(20) NOT NULL,
moonSign VARCHAR(20)NOT NULL,
risingSign VARCHAR(20)NOT NULL,
sunDescription TEXT NOT NULL,
moonSign TEXT NOT NULL,
risingDescription TEXT NOT NULL
);