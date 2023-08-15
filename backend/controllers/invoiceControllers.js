const asyncHandler = require("express-async-handler");
const Invoice = require("../models/invoiceModel");
const User = require("../models/userModel");

// @desc Get invoices
// @route GET /api/invoices
// @access Private

const getInvoices = asyncHandler(async (req, res) => {
  const invoice = await Invoice.find({ user: req.user.id });
  res.status(200).json(invoice);
});

// @desc Set invoices
// @route POST /api/invoices
// @access Private

const setInvoices = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const invoice = await Invoice.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(invoice);
});

// @desc Update invoices
// @route PUT /api/invoices/:id
// @access Private

const updateInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
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

  const updatedInvoice = await Invoice.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedInvoice);
});

// @desc Delete invoices
// @route DELETE /api/invoices/:id
// @access Private

const deleteInvoice = asyncHandler(async (req, res) => {
  const invoice = await Invoice.findById(req.params.id);

  if (!invoice) {
    res.status(400);
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
  setInvoices,
  updateInvoice,
  deleteInvoice,
};
