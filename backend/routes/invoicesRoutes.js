const express = require("express");
const router = express.Router();
const {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoiceById,
} = require("../controllers/invoicesControllers");

const {protect} = require('../middleware/authMiddleware')
 
router.route("/").get(protect, getInvoices).post(protect, createInvoice);
router.route("/:id").get(protect, getInvoiceById).delete(protect, deleteInvoice).put(protect, updateInvoice);

module.exports = router;
