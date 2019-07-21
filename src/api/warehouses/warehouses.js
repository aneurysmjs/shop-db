import { Router } from 'express';

import Warehouse from './warehouseModel';

const warehousesRouter = Router();
/**
 * we can refactore our routes using the '.route()' method,
 * so instead of having lots of places that shared the same url,
 * we can define that common url and only apply the HTTP verbs that correspond.
 */
warehousesRouter.route('/')
   .get(async (req, res, next) => {
      try {
        const warehouses = await Warehouse.find({})
          .populate('shop')
          .exec();
        res.json(warehouses);
      } catch (error) {
        next(error);
      }
   })
   .post(async (req, res, next) => {
      const warehouse = req.body;
      try {
        const createdWarehouse = await Warehouse.create({
          ...warehouse,
        });
        res.json(createdWarehouse);
      } catch (error) {
        next(error);
      }
   });

warehousesRouter.route('/:id')
  .get(async (req, res, next) => {
    const { id } = req.params;
    try {
      const warehouse = await Warehouse.findOne({
        _id: id,
      })
      // .populate('shop')
      .exec();
      res.json(warehouse);
    } catch (error) {      
      next(error);
    }
  })
  .put(async (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    try {
      const updatedWarehouse = await Warehouse
        .findByIdAndUpdate(id, {
          ...user,
        },
        { new: true },
      );
      res.json(updatedWarehouse);
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await Warehouse.findByIdAndDelete({
        _id: id,
      });
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

export default warehousesRouter;
