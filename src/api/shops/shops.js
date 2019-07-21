import has from 'lodash.has';
import { Router } from 'express';

import Shop from './shopModel';

const shopsRouter = Router();

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
   .delete((req, res, next) => {
      if (!has(req.body, 'shops')) {
        next('shops property doesn\'t exist');
      }
      const { shops } = req.body;
      Shop.deleteMany({
        _id: {
          '$in': shops,
        },
      })
        .then((deletedShops) =>{
          res.json(deletedShops);
        })
        .catch((err) =>{
          next(err);
        });
   })
   .post((req, res, next) => {
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
   .put((req, res, next) => {
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
   .delete((req, res, next) => {
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

export default shopsRouter;
