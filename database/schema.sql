-- Schema for 'Countries' Table
CREATE TABLE Countries (
    id SERIAL PRIMARY KEY,
    country_code VARCHAR(100) NOT NULL,
    country_name VARCHAR(100) NOT NULL
);

-- Schema for 'visited_countries' Table
CREATE TABLE visited_countries (
    id SERIAL PRIMARY KEY,
    country_code VARCHAR(100) NOT NULL
);
