DROP TABLE IF EXISTS products;
CREATE TABLE IF NOT EXISTS products(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price text,
  inventory VARCHAR(30)
);

