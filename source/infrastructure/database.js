import mysql from 'mysql';
import * as config from '../configuration';

const dbConfig = {
    connectionLimit: config.DB_CONNECTION_LIMIT,
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
};

const pool = mysql.createPool(dbConfig);

pool.query('SELECT NOW() as now', (error, results, fields) => {
    if (error) console.error(error);
    return console.log(`Connected at ${results[0].now}`);
});

export const getConnection = () => pool;
