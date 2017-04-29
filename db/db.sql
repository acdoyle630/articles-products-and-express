DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS articles;

CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  category VARCHAR(50),
  price TEXT,
  inventory VARCHAR(30)
);

CREATE TABLE IF NOT EXISTS articles(
  id SERIAL PRIMARY KEY,
  title VARCHAR(50),
  body  TEXT,
  author VARCHAR(50)
);