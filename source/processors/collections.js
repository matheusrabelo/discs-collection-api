import fs from 'fs';
import path from 'path';
import { getConnection } from '../infrastructure/database';

const getQuery= (queryName) => {
    const queryPath =
        path.join(__dirname, `../../source/queries/${queryName}.sql`);
    return fs.readFileSync(queryPath).toString();
};

const getCollectionQuery = getQuery('get-collection');
const getCollectionsQuery = getQuery('get-collections');
const createCollectionQuery = getQuery('create-collection');

export const getCollection = (id) => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(getCollectionQuery, id, (error, [results]) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const getCollections = () => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(getCollectionsQuery, (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const createCollection = (collection) => {
    const name = collection.name;
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(createCollectionQuery, name, (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};