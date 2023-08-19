const asyncHandler = require("express-async-handler");
const Invoice = require("../models/invoiceModel");
const User = require("../models/userModel");

// @desc Get all invoices for a user
// @route GET /api/invoices
// @access Private

const getInvoices = asyncHandler(async (req, res) => {
  const invoices = await Invoice.find({ user: req.user.id });
  res.status(200).json(invoices);
});

// @desc Create a new invoice
// @route POST /api/invoices
// @access Private

const createInvoice = asyncHandler(async (req, res) => {
  const invoice = new Invoice({
    ...req.body,
    user: req.user.id, 
  });

  const createdInvoice = await invoice.save();
  res.status(201).json(createdInvoice);
});

// @desc Update invoices
// @route PUT /api/invoices/:id
// @access Private

const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(404);
    throw new Error("Invoice not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  //Make sure the logged in user matches the invoice user
  if (invoice.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  Object.assign(invoice, req.body);
  const updatedInvoice = await invoice.save();
  res.status(200).json(updatedInvoice);
});

// @desc Delete an invoice
// @route DELETE /api/invoices/:id
// @access Private

const deleteInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(404);
    throw new Error("Invoice not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }
  //Make sure the logged in user matches the invoice user
  if (invoice.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await invoice.deleteOne();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
};
