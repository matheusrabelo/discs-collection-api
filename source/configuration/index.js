import dotenv from 'dotenv';
import process from 'process';

const configuration = dotenv.config().parsed || {};

const getEnvVar = (name, defaultValue) =>
    process.env[name] || configuration[name] || defaultValue;

export const PORT = getEnvVar('PORT', '8080');
export const DB_CONNECTION_LIMIT = getEnvVar('DB_CONNECTION_LIMIT', 10);
export const DB_HOST = getEnvVar('DB_HOST', 'localhost');
export const DB_USER = getEnvVar('DB_USER', 'root');
export const DB_PASSWORD = getEnvVar('DB_PASSWORD', '');
export const DB_DATABASE = getEnvVar('DB_DATABASE', 'discsdb');
