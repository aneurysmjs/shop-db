const mongoose = require('mongoose');

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

module.exports = mongoose.model('user', UserSchema);
