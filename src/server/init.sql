/* DROP BEFORE PROCEEDING */

USE master;
DROP DATABASE Customers_DB, Orders_DB, Storage_DB;
GO

/* CREATE DATABASES & TABLES */

USE master;
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

/* INSERT DATA */

USE Customers_DB;

INSERT INTO Customers
  (customer_id, first_name, surname)
VALUES
  (1, 'Jan', 'Kowalski');
INSERT INTO Customers
  (customer_id, first_name, surname)
VALUES
  (2, 'Stefan', 'Batory');
INSERT INTO Customers
  (customer_id, first_name, surname)
VALUES
  (3, 'Maria', 'Konopnicka');
INSERT INTO Customers
  (customer_id, first_name, surname)
VALUES
  (4, 'Steve', 'Jobs');
INSERT INTO Customers
  (customer_id, first_name, surname)
VALUES
  (5, 'Ania', 'Nowak');

INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (1, 1);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (2, 1);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (3, 2);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (4, 2);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (5, 3);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (6, 3);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (7, 4);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (8, 4);
INSERT INTO Orders
  (order_id, customer_id)
VALUES
  (9, 5);

USE Orders_DB;

INSERT INTO Statuses
  (status_id, message)
VALUES
  (1, 'Available');
INSERT INTO Statuses
  (status_id, message)
VALUES
  (2, 'Booked');
INSERT INTO Statuses
  (status_id, message)
VALUES
  (3, 'Ready for pick up');
INSERT INTO Statuses
  (status_id, message)
VALUES
  (4, 'Not available');

INSERT INTO Orders
  (order_id, status_id, storage_ids)
VALUES
  (1, 2, '1,2' )
INSERT INTO Orders
  (order_id, status_id, storage_ids)
VALUES
  (2, 2, '3,4' )
INSERT INTO Orders
  (order_id, status_id, storage_ids)
VALUES
  (3, 3, '5,6' )
INSERT INTO Orders
  (order_id, status_id, storage_ids)
VALUES
  (4, 3, '7,8' )
INSERT INTO Orders
  (order_id, status_id, storage_ids)
VALUES
  (5, 4, '9' )

