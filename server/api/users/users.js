const Router = require('express');
const usersRouter = Router();

const User = require('./userModel');

/**
 * we can refactore our routes using the '.route()' method,
 * so instead of having lots of places that shared the same url,
 * we can define that common url and only apply the HTTP verbs that correspond.
 */
usersRouter.route('/')
   .get(async (req, res, next) => {
      try {
        const users = await User.find({}).populate();
        res.json(users);
      } catch (error) {
        next(error);
      }
   })
   .post(async (req, res, next) => {
      const user = req.body;
      try {
        const createdUser = await User.create({
          ...user,
        });
        res.json(createdUser);
      } catch (error) {
        next(error);
      }
   });

usersRouter.route('/:id')
  .get(async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findOne({
        _id: id,
      });
      res.json(user);
    } catch (error) {
      next(error);
    }
  })
  .put(async (req, res, next) => {
    const { id } = req.params;
    const user = req.body;
    try {
      const updatedUser = await User
        .findByIdAndUpdate(id, {
          ...user,
        },
        { new: true },
      );
      res.json(updatedUser);
    } catch (error) {
      next(error);
    }
  })
  .delete(async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete({
        _id: id,
      });
      res.json(user);
    } catch (error) {
      next(error);
    }
  });

module.exports = usersRouter;
