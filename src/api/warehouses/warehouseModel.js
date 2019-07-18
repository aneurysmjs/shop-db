const mongoose = require('mongoose');

const WarehouseSchema = new mongoose.Schema({
  latitude: {
    type: String,
  },
  longitude: {
    type: String,
  },
  address: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
}, { timestamps: true, });

module.exports = mongoose.model('warehouse', WarehouseSchema);
