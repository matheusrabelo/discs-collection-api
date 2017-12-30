USE discsdb;

DROP TABLE IF EXISTS collections;

CREATE TABLE collections (
	id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);
