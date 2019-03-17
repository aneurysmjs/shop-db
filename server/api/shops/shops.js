const Router = require('express');
const shopsRouter = Router();

const Shop = require('./shopModel');

shopsRouter.route('/')
   .get((req, res, next) => {
      Shop.find({})
        .then((shops) =>{
          res.json(shops);
        })
        .catch((err) =>{
          next(err);
        });
   })
   .post((req, res) => {
      const shop = req.body;
      Shop.create({
        ...shop,
      })
        .then((createdShop) =>{
          res.json(createdShop);
        })
        .catch((err) =>{
          next(err);
        });
   });

shopsRouter.route('/:id')
   .get((req, res, next) => {
      
      Shop.findOne({
        _id: req.params.id,
      })
      .then((shop) => {
        res.json(shop);
      })
      .catch((err) => {
        next(err);
      });

   })
   .put((req, res) => {
      const { id } = req.params;
      const shop = req.body;
      Shop.findByIdAndUpdate(id, {
          ...shop,
        },
        { new: true }
      )
        .then(updatedShop => {
          res.json(updatedShop);
        })
        .catch((err) => {
          next(err);
        });
   })
   .delete((req, res) => {
      const { id } = req.params;
      Shop.findByIdAndDelete({
        _id: id,
      })
      .then((deletedShop) => {
        res.json(deletedShop);
      })
      .catch((err) => {
        next(err);
      });

   });

module.exports = shopsRouter;
