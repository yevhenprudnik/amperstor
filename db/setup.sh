PGPASSWORD=amperstor psql -f db.sql -U amperstor -p 5432 -h localhost
PGPASSWORD=amperstor psql -d amperstor -f tables.sql -U amperstor -p 5432 -h localhost