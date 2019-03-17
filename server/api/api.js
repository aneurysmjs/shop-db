const router = require('express').Router();

/**
 * api router will mount other routers for all resources.
 * Each resource folder has a resourceRoutes.js file with
 * the router ready to go, require them and mount them to
 * their respective routes below
 */

router.use('/users', require('./users/users'));
router.use('/shops', require('./shops/shops'));

module.exports = router;
