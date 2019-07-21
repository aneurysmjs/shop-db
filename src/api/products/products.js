import has from 'lodash.has';
import { Router } from 'express';

import Product from './productModel';

const productsRouter = Router();

productsRouter.route('/')
   .get((req, res, next) => {
      Product.find({})
        .then((products) =>{
          res.json(products);
        })
        .catch((err) =>{
          next(err);
        });
   })
   .delete((req, res, next) => {
      if (!has(req.body, 'products')) {
        next('products property doesn\'t exist');
      }
      const { products } = req.body;
      Product.deleteMany({
        _id: {
          '$in': products,
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
      const product = req.body;
      Product.create({
        ...product,
      })
        .then((createdProduct) =>{
          res.json(createdProduct);
        })
        .catch((err) =>{
          next(err);
        });
   });

productsRouter.route('/:id')
   .get((req, res, next) => {
      
      Product.findOne({
        _id: req.params.id,
      })
      .then((product) => {
        res.json(product);
      })
      .catch((err) => {
        next(err);
      });

   })
   .put((req, res, next) => {
      const { id } = req.params;
      const shop = req.body;
      Product.findByIdAndUpdate(id, {
          ...shop,
        },
        { new: true }
      )
        .then(updatedProduct => {
          res.json(updatedProduct);
        })
        .catch((err) => {
          next(err);
        });
   })
   .delete((req, res, next) => {
      const { id } = req.params;
      Product.findByIdAndDelete({
        _id: id,
      })
      .then((deletedProduct) => {
        res.json(deletedProduct);
      })
      .catch((err) => {
        next(err);
      });

   });

export default productsRouter;
