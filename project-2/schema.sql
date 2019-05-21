
-- Yelp
-- Client ID: 41Bap4G8RceTA0ysryDf7A
-- API Key: qsW9ckEtGAnQjD0Dk9tYEm5lQKwaTe9OlyR43TPg2abAk0A-7g66abZnMalraZlyHsCUNS2OZjxXFPaOUieHzkP_QwXReDcJUurYcYryMehtREjSpsCsQ772GjfjXHYx

DROP DATABASE IF EXISTS b2c_db;
CREATE database b2c_db;

USE b2c;

CREATE TABLE customer
(
    user_name VARCHAR(100) not NULL,
    id INT(1000) not null,
    customer_password varchar(100) not null,
    customer_first VARCHAR(100) not NULL,
    customer_last VARCHAR(100) not null,
    email VARCHAR(100) not NULL,
    restaurant VARCHAR(100) not NULL,
    primary key (id)
);

CREATE TABLE vendor
(   
    id INT(1000) not null,
    vendor_name VARCHAR(100) not null,
    vendor_password VARCHAR(100) not null,
    email VARCHAR(100) not null,
    restaurant_name VARCHAR(100) not NULL,
    city VARCHAR(100) not null,
    primary key (id)
);

CREATE TABLE joint
( 
    user_name VARCHAR(100) Not Null,
    customer_first VARCHAR(100) not NULL,
    customer_last VARCHAR(100) not null,
    restaurant_name VARCHAR(100) not NULL,
    visits int not NULL, 
    review VARCHAR(100) not NULL,
    primary Key(user_name)
);

SELECT * FROM customer;
select * from vendor;
select * from joint;