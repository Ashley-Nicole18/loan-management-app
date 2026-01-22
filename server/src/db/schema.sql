CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);

CREATE TABLE transactions(
    customer_id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL 
    REFERENCES users(user_id)
    ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    amount INTEGER NOT NULL,
    interest INTEGER NOT NULL,
    status VARCHAR(20) CHECK (status IN ('completed', 'inprogress')) NOT NULL
);