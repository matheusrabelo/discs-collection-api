import fs from 'fs';
import path from 'path';
import { getConnection } from '../infrastructure/database';

const getQuery= (queryName) => {
    const queryPath =
        path.join(__dirname, `../../source/queries/${queryName}.sql`);
    return fs.readFileSync(queryPath).toString();
};

const getCollectionQuery = getQuery('get-collection');
const deleteCollectionQuery = getQuery('delete-collection');
const updateCollectionQuery = getQuery('update-collection');
const getCollectionDiscsQuery = getQuery('get-collection-discs');
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

export const getCollectionDiscs = (id) => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(getCollectionDiscsQuery, id, (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const updateCollection = (id, collection) => {
    const name = collection.name;
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(updateCollectionQuery, [name, id], (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const deleteCollection = (id) => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(deleteCollectionQuery, id, (error, results) => {
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
