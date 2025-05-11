import { Request, Response } from 'express';
import Application from '../models/Application';
import { calculateStats } from '../utils/stats';

export const submitApplication = async (req: Request, res: Response) => {
  try {
    const application = new Application(req.body);
    await application.save();
    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (err) {
    res.status(400).json({ error: 'Invalid input', details: err });
  }
};

export const getStats = async (_req: Request, res: Response) => {
  try {
    const stats = await calculateStats();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving stats', details: err });
  }
};

export default Application;
