import express from 'express';
import collectionsRouter from './collections';

const router = new express.Router();

router.use('/collections', collectionsRouter);

export default router;
