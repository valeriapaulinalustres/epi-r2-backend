import { Router } from "express";
import {
saveDataController,
getDataController
  } from "../controllers/data.controller.js";

const router = Router()

router.get("/", getDataController)
router.post("/save-data", saveDataController)

export default router;