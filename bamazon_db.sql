--lost my database info so had to remake it --

CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products(

item_id NOT NULL AUTO_INCREMENT PRIMARY KEY,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price FLOAT(9) NOT NULL,
stock_quantity INT(9)
); 


INSERT INTO products(product_name,department_name,price,quantity_stock)
value("Billiards Table","Recreational",1999.99,	4),
("Ping-Pong Table","Recreational",499.99,7),
("Engine Lift","Tools",799.99,6),
("Torque Bar","Tools",175.99,6),
("Transformers,Optimus Prime","Toys",49.99,14),
("Rubik's Cube, 3X3","Toys",12.99,22),
("Drafting Table","Furniture",199.99,9),
("La-Z-Boy Recliner","Furniture",899.99,4),
("Go-Pro Black","Electronics",499.99,12),
("Mechanical Keyboard","Electronics",499.99,12);