
create database mern_db;
USE mern_db;

create table products (
id int primary key auto_increment,
title varchar(200),
price double,
createdAt DATE,
updatedAt DATE
);



