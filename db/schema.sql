CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE `burgers` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR(255) NOT NULL,
  `episode` VARCHAR(255) NOT NULL,
  `devoured` BOOLEAN DEFAULT false,
  `date` TIMESTAMP NOT NULL,

  PRIMARY KEY (`id`) );