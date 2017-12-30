import express from 'express';
import collectionsRouter from './collections';
import discsRouter from './discs';

const router = new express.Router();

router.use('/collections', collectionsRouter);
router.use('/discs', discsRouter);

export default router;
