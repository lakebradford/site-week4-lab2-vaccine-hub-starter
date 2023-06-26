CREATE TABLE users (
    id          SERIAL PRIMARY  KEY,
    password    TEXT NOT NULL,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    -- We are checking to see if the email contains the @ symbol and is a unique value
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email )> 1), 
    location    TEXT NOT NULL,
    date        TIMESTAMP NOT NULL
);