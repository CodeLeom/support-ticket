const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product: {
        type: String,
        required: [true, 'Please select a product'],
        enum: ['Billing/Sales', 'Feedback', 'Abuse Report', 'Technical'],
    },
    description: {
        type: String,
        required: [true, 'Please add a description to your ticket']
    },
    status: {
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    },
},
{
    timestamps: true,
})

module.exports = mongoose.model('Ticket', ticketSchema)