DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS categories;
CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  category VARCHAR(50),
  price text,
  inventory VARCHAR(30)
);

