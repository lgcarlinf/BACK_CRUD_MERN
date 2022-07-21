import express from "express";
import {
  createData,
  deleteData,
  getAllData,
  getOneData,
  updateData,
} from "../controllers/crudController.js";

const router = express.Router();

router.route("/").get(getAllData).post(createData);
router.route("/:id").get(getOneData).put(updateData).delete(deleteData);

export default router;
