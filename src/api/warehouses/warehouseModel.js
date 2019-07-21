import mongoose from 'mongoose';

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

export default mongoose.model('warehouse', WarehouseSchema);
