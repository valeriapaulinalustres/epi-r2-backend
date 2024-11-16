import { Router } from "express";
import {
saveDataController
  } from "../controllers/data.controller.js";

const router = Router()

router.post("/save-data", saveDataController)

export default router;