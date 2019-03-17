const mongoose = require('mongoose');

const { PORT } = require('../config');

connect = () => {
  return mongoose.connect(`mongodb://localhost:${PORT}/shop`);
};

const user = new mongoose.Schema({
  name: String,
  producuts: [],
  shop: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'shop',
  },
}, { timestamps: true, });

const shop = new mongoose.Schema({
  name: String,
});

/**
 * @desc Models are Capitizaled 
 */
const User = mongoose.model('user', user);
const Shop = mongoose.model('shop', shop);

connect()
  .then(async connection => {
    const newShop = await Shop.create({ name: 'Jero\'s' });
    const jero = await User.create({
      name: 'Джеро',
      shop: newShop._id,
    });

    const match = await User.findById(jero.id)
      /**
       * @desc 'populate' basically is like 'virtual join tables',
       * sot it will look at the give Schema, it'll look for 
       * anything that has a 'type' with an ObjectId and a 
       * reference to a collection(ref) and is gonna query for those
       * and 'inject' or 'hydrate' those values into the field itself.
       * 
       * so instead of getting a 'shop' field with an ObjectId, you'll 
       * get back a 'shop' field that is a shop object
       */
      .populate('shop')
      .exec()

    console.log('match', match);
    
  }).catch();
