import express from "express";
import {
  createData,
  deleteData,
  getAllData,
  getOneData,
  updateData,
} from "../controllers/crudController.js";

const router = express.Router();

/**
 * Route for getting all data and creating new data.
 * @route GET /api/v1/crud/items
 * @route POST /api/v1/crud/items
 */
router.route("/").get(getAllData).post(createData);

/**
 * Route for getting, updating, and deleting a specific data item.
 * @route GET /api/v1/crud/:id
 * @route PUT /api/v1/crud/:id
 * @route DELETE /api/v1/crud/:id
 */
router.route("/:id").get(getOneData).put(updateData).delete(deleteData);

export default router;


/**
 * GET /api/v1/crud/
 * @summary Retrieve a list of items
 * @tags Items
 * @return {array<object>} 200 - Success response - application/json
 * @example response - 200 - Example success response
 * [
 *   {
 *     "id": "1",
 *     "name": "Item 1",
 *    "comment": "Comment 1", 
 *   "complete": false
 *   },
 *   {
 *     "id": "2",
 *     "name": "Item 2",
 *    "comment": "Comment 2",
 *    "complete": false
 *   }
 * ]
 */

/**
 * POST /api/v1/crud/
 * @summary Create a new item
 * @tags Items
 * @param {object} item.body.required - Item object
 * @return {object} 201 - Success response - application/json
 * @example response - 201 - Example success response
 * {
 *   "id": "3",
 *   "name": "Item 3",
 *   "comment": "Comment 3",
 *   "complete": false
 * }
 */

/**
 * GET /api/v1/crud/{id}
 * @summary Retrieve a single item
 * @tags Items
 * @param {string} id.path.required - Item ID
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
 * {
 *  "id": "1",
 * "name": "Item 1",
 * "comment": "Comment 1",
 * "complete": false
 * }
 */

/**
 * PUT /api/v1/crud/{id}
 * @summary Update an item
 * @tags Items
 * @param {string} id.path.required - Item ID
 * @param {object} item.body.required - Item object
 * @return {object} 200 - Success response - application/json
 * @example response - 200 - Example success response
 * {
 * "id": "1",
 * "name": "Item 1",
 * "comment": "Comment 1",
 * "complete": true
 * }
 */

/**
 * DELETE /api/v1/crud/{id}
 * @summary Delete an item
 * @tags Items
 * @param {string} id.path.required - Item ID
 * @return {object} 204 - Success response - application/json
 * @example response - 204 - Example success response
 * {
 * "message": "Item deleted"
 * }
 */
