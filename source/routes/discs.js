import express from 'express';
import * as discsProcessor from '../processors/discs';

const discs = new express.Router();

discs.get('/', (req, res) => {
    return discsProcessor.getAllDiscs()
        .then((result) => res.status(200).json(result))
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

export default discs;
