const express = require("express");
const router = express.Router();
const {
  getInvoices,
  setInvoices,
  updateInvoices,
  deleteInvoices,
} = require("../controllers/invoicesControllers");

const {protect} = require('../middleware/authMiddleware')
 
router.route("/").get(protect, getInvoices).post(protect, setInvoices);
router.route("/:id").delete(protect, deleteInvoices).put(protect, updateInvoices);

module.exports = router;
