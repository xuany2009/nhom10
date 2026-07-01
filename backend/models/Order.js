const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  customerPhone: { type: String, default: '' },
  customerAddress: { type: String, default: '' },
  items: [{
    productId: String,
    name: String,
    price: Number,
    quantity: Number,
    image: String,
    size: String
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // pending, confirmed, shipped, delivered
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
