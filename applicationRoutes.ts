import express from 'express';
import { submitApplication, getStats } from '../controllers/applicationController';

const router = express.Router();

router.post('/', submitApplication);
router.get('/stats', getStats);

export default router;
