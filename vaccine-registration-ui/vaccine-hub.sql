
-- Deletes and recreates a new database
DROP DATABASE vaccine_hub;
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

--runs new database

\i vaccine-hub-schema.sql