import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: 'shop',
  },
}, { timestamps: true, });

export default mongoose.model('user', UserSchema);
