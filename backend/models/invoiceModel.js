const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true
    }
});

const addressSchema = mongoose.Schema({
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    postCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});

const invoiceSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        required: true
    },
    paymentDue: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    paymentTerms: {
        type: Number,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    clientEmail: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['pending', 'paid', 'overdue'] // Przykładowe statusy faktury
    },
    senderAddress: {
        type: addressSchema,
        required: true
    },
    clientAddress: {
        type: addressSchema,
        required: true
    },
    items: {
        type: [itemSchema],
        required: true
    },
    total: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Invoice", invoiceSchema);
