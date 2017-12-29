import dotenv from 'dotenv';
import process from 'process';

const configuration = dotenv.config().parsed || {};

export const PORT =
    process.env.PORT || configuration.PORT || '8080';
