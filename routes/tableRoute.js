import express from "express";
import {
  deleteTableController,
  getTableController,
  tableController,
} from "../controller/tableController.js";

import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/table", tableController);

router.get("/get-table", requireSignIn, getTableController);

router.delete("/delete-table/:id", deleteTableController);

export default router;
