import { Router } from 'express';

import users from './users/users';
import products from './products/products';
import shops from './shops/shops';
import warehouses from './warehouses/warehouses';

const router = Router();

router.use('/users', users);
router.use('/products', products);
router.use('/shops', shops);
router.use('/warehouses', warehouses);

export default router;
