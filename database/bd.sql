CREATE DATABASE node_mysql_ts;

use 

CREATE TABLE posts (
  id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description  TEXT NOT NULL,
  image_url TEXT ,
  created_at TIMESTAMP  DEFAULT CURRENT_TIMESTAMP
);

DESC posts;