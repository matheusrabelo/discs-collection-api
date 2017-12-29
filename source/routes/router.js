import express from 'express';

const router = new express.Router();

router.get('*', (req, res) => {
    res.status(200).json('hello world');
});

export default router;
