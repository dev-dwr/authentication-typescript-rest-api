import { createSessionSchema } from './../schemes/auth.schema';
import express from "express";
import validateResource from "../middleware/validateResource";
import { createSessionHandler, refreshAccessTokenHandler } from '../controllers/auth.controller';

const router = express.Router();

router.post("/api/session", validateResource(createSessionSchema), createSessionHandler);

router.post("/api/session/refresh", refreshAccessTokenHandler);

export default router;