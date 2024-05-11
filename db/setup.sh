PGPASSWORD=postgres psql -f db.sql -U postgres -p 5432 -h localhost
PGPASSWORD=postgres psql -d electro_shop -f tables.sql -U postgres -p 5432 -h localhost
PGPASSWORD=postgres psql -d electro_shop -f seed.sql -U postgres -p 5432 -h localhost