import express from 'express';
import * as collectionsProcessor from '../processors/collections';

const collections = new express.Router();

collections.get('/', (req, res) => {
    return collectionsProcessor.getCollections()
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

collections.post('/', (req, res) => {
    const collection = req.body;
    return collectionsProcessor.createCollection(collection)
        .then((result) => {
            if (result) return res.status(201).json(result);
            res.status(400).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

collections.get('/:id', (req, res) => {
    const { id } = req.params;
    return collectionsProcessor.getCollection(id)
        .then((result) => {
            if (result) return res.status(200).json(result);
            res.status(404).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

collections.put('/:id', (req, res) => {
    const { id } = req.params;
    const collection = req.body;
    return collectionsProcessor.updateCollection(id, collection)
        .then((result) => {
            if (result) return res.status(201).json(result);
            res.status(400).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

collections.delete('/:id', (req, res) => {
    const { id } = req.params;
    return collectionsProcessor.deleteCollection(id)
        .then((result) => {
            if (result) return res.status(200).json(result);
            res.status(404).json();
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json();
        });
});

collections.get('/:id/discs', (req, res) => {
    const { id } = req.params;
    return collectionsProcessor.getCollectionDiscs(id)
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

export default collections;
