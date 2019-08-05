DROP DATABASE IF EXISTS Bike;
CREATE DATABASE Bike;
USE Bike;


CREATE TABLE `file` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text ,
  `type` varchar(100) NOT NULL,
  `size` int(11) NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
