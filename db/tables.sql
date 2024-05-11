CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "username" VARCHAR(255) NOT NULL UNIQUE,
  "email" VARCHAR(255) NOT NULL UNIQUE,
  "password" VARCHAR(255) NOT NULL,
  "role" VARCHAR(255) DEFAULT 'common',
  "discount" FLOAT DEFAULT 0
);
CREATE TABLE "product" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(255) NOT NULL,
  "price" FLOAT NOT NULL,
  "count" INT DEFAULT 0,
  "description" VARCHAR(255),
  "media" TEXT []
);
CREATE TABLE "category" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(255) NOT NULL
);
CREATE TABLE "product_category" (
  "product_id" INT REFERENCES "product"("id"),
  "category_id" INT REFERENCES "category"("id")
);