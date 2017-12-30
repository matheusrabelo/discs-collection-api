import fs from 'fs';
import path from 'path';
import { getConnection } from '../infrastructure/database';

const getQuery= (queryName) => {
    const queryPath =
        path.join(__dirname, `../../source/queries/${queryName}.sql`);
    return fs.readFileSync(queryPath).toString();
};

const getDiscQuery = getQuery('get-disc');
const updateDiscQuery = getQuery('update-disc');
const deleteDiscQuery = getQuery('delete-disc');
const getDiscsQuery = getQuery('get-discs');
const createDiscQuery = getQuery('create-disc');

export const getDisc = (id) => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(getDiscQuery, id, (error, [results]) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const updateDisc = (id, disc) => {
    const name = disc.name;
    const collectionId = disc.collection_id;
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        const args = [name, collectionId, id];
        pool.query(updateDiscQuery, args, (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const deleteDisc = (id) => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(deleteDiscQuery, id, (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const getDiscs = () => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(getDiscsQuery, (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};

export const createDisc = (disc) => {
    const name = disc.name;
    const collectionId = disc.collection_id;
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(createDiscQuery, [name, collectionId], (error, results) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};
