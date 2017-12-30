import express from 'express';
import discsRouter from './discs';

const router = new express.Router();

router.use('/discs', discsRouter);

export default router;
