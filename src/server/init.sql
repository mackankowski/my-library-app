/* CREATE DATABASES & TABLES */

USE master;
GO
CREATE DATABASE Customers_DB;
GO
USE Customers_DB;
CREATE TABLE Customers
(
  customer_id INTEGER PRIMARY KEY NOT NULL,
  first_name TEXT,
  surname TEXT,
);
CREATE TABLE Orders
(
  order_id INTEGER PRIMARY KEY NOT NULL,
  customer_id INTEGER,
);
CREATE DATABASE Orders_DB;
GO
USE Orders_DB;
CREATE TABLE Orders
(
  order_id INTEGER PRIMARY KEY NOT NULL,
  status_id INTEGER,
  storage_ids TEXT,
);
CREATE TABLE Statuses
(
  status_id INTEGER PRIMARY KEY NOT NULL,
  message TEXT,
);
CREATE DATABASE Storage_DB;
GO
USE Storage_DB;
CREATE TABLE Storage
(
  storage_id INTEGER PRIMARY KEY NOT NULL,
  author_id INTEGER
);
CREATE TABLE Author
(
  author_id INTEGER PRIMARY KEY NOT NULL,
  first_name TEXT,
  surname TEXT,
);

/* SET FOREIGN KEYS */

USE Customers_DB;
ALTER TABLE Orders     
ADD CONSTRAINT FK_Customer_Id FOREIGN KEY (customer_id)     
    REFERENCES Customers (customer_id)     
    ON DELETE CASCADE    
    ON UPDATE CASCADE    
;
USE Orders_DB;
ALTER TABLE Orders     
ADD CONSTRAINT FK_Status_Id FOREIGN KEY (status_id)     
    REFERENCES Statuses (status_id)     
    ON DELETE CASCADE    
    ON UPDATE CASCADE    
;
USE Storage_DB;
ALTER TABLE Storage     
ADD CONSTRAINT FK_Author_Id FOREIGN KEY (author_id)     
    REFERENCES Author (author_id)     
    ON DELETE CASCADE    
    ON UPDATE CASCADE    
;