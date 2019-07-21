 import mongoose from 'mongoose';

const ShopSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
}, { timestamps: true, });

export default mongoose.model('shop', ShopSchema);
