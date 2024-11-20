import { Router } from "express";
import {
saveDataController,
getDataController,
getDataFilteredByYearMonthHealthcenterController,
  } from "../controllers/data.controller.js";

const router = Router()

router.get("/", getDataController)
router.post("/get-data-filtered-year-month-healthcenter", getDataFilteredByYearMonthHealthcenterController)
router.post("/save-data", saveDataController)

export default router;