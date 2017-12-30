USE discsdb;

DROP TABLE IF EXISTS collections;
DROP TABLE IF EXISTS discs;

CREATE TABLE collections (
	id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE discs (
	id SERIAL PRIMARY KEY,
    collection_id INTEGER NOT NULL,
    name VARCHAR(200),
    created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO collections (name) VALUES ("Primeira");
INSERT INTO collections (name) VALUES ("Segunda");
INSERT INTO collections (name) VALUES ("Terceira");
INSERT INTO discs (name,collection_id) VALUES ("Primeiro", 2);
INSERT INTO discs (name,collection_id) VALUES ("Segundo", 2);
INSERT INTO discs (name,collection_id) VALUES ("Terceiro", 2);
INSERT INTO discs (name,collection_id) VALUES ("Quarto", 3);
INSERT INTO discs (name,collection_id) VALUES ("Quinto", 3);
