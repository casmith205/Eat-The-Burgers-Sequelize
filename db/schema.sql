-- CREATE & USE DB
CREATE DATABASE burgers_db;

USE burgers_db;

-- CREATE THE BURGERS TABLE
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(255),
    devoured BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
);

