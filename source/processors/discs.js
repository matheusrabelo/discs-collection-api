import fs from 'fs';
import path from 'path';
import { getConnection } from '../infrastructure/database';

const allDiscsPath =
    path.join(__dirname, '../../source/queries/get-all-discs.sql');
const allDiscsQuery = fs.readFileSync(allDiscsPath).toString();

export const getAllDiscs = () => {
    return new Promise((resolve, reject) => {
        const pool = getConnection();
        pool.query(allDiscsQuery, (error, results, fields) => {
            if (error) return reject(error);
            return resolve(results);
        });
    });
};
