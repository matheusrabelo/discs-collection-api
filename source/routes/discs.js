import express from 'express';
import * as discsProcessor from '../processors/discs';

const discs = new express.Router();

discs.get('/', (req, res) => {
    return discsProcessor.getDiscs()
        .then((result) => {
            if (result && result.length > 0) {
                return res.status(200).json(result);
            }
            res.status(404).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

discs.post('/', (req, res) => {
    const disc = req.body;
    return discsProcessor.createDisc(disc)
        .then((result) => {
            if (result) return res.status(201).json(result);
            res.status(400).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

discs.get('/:id', (req, res) => {
    const { id } = req.params;
    return discsProcessor.getDisc(id)
        .then((result) => {
            if (result) return res.status(200).json(result);
            res.status(404).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

discs.put('/:id', (req, res) => {
    const { id } = req.params;
    const disc = req.body;
    return discsProcessor.updateDisc(id, disc)
        .then((result) => {
            if (result) return res.status(201).json(result);
            res.status(400).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

discs.delete('/:id', (req, res) => {
    const { id } = req.params;
    return discsProcessor.deleteDisc(id)
        .then((result) => {
            if (result) return res.status(200).json(result);
            res.status(404).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

export default discs;
