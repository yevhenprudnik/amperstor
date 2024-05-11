INSERT INTO "category" ("title")
VALUES ('Laptops'),
  ('Smartphones'),
  ('Tablets'),
  ('Cameras'),
  ('Headphones');
INSERT INTO "product" (
    "title",
    "price",
    "count",
    "description",
    "media"
  )
VALUES (
    'Dell XPS 15',
    1499.99,
    10,
    'Powerful laptop with stunning display',
    ARRAY ['https://example.com/dell_xps_15.jpg']
  ),
  (
    'iPhone 13 Pro',
    999.99,
    20,
    'Flagship smartphone from Apple',
    ARRAY ['https://example.com/iphone_13_pro.jpg']
  ),
  (
    'Samsung Galaxy Tab S7',
    649.99,
    15,
    'Premium Android tablet with S Pen',
    ARRAY ['https://example.com/samsung_galaxy_tab_s7.jpg']
  ),
  (
    'Canon EOS R5',
    3499.99,
    5,
    'High-resolution mirrorless camera',
    ARRAY ['https://example.com/canon_eos_r5.jpg']
  ),
  (
    'Sony WH-1000XM4',
    349.99,
    30,
    'Noise-cancelling wireless headphones',
    ARRAY ['https://example.com/sony_wh_1000xm4.jpg']
  );
INSERT INTO "product_category" ("product_id", "category_id")
VALUES (1, 1),
  -- Dell XPS 15 -> Laptops
  (2, 2),
  -- iPhone 13 Pro -> Smartphones
  (3, 3),
  -- Samsung Galaxy Tab S7 -> Tablets
  (4, 4),
  -- Canon EOS R5 -> Cameras
  (5, 5);
-- Sony WH-1000XM4 -> Headphones