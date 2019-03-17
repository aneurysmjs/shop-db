const Router = require('express');
const usersRouter = Router();

const User = require('./userModel');

/**
 * we can refactore our routes using the '.route()' method,
 * so instead of having lots of places that shared the same url,
 * we can define that common url and only apply the HTTP verbs that correspond.
 */
usersRouter.route('/')
   .get((req, res, next) => {
      User.find({})
        .then((users) =>{
          res.json(users);
        })
        .catch((err) =>{
          next(err);
        });
   })
   .post((req, res) => {
      const user = req.body;
      User.create({
        ...user,
      })
        .then((createdUser) =>{
          res.json(createdUser);
        })
        .catch((err) =>{
          next(err);
        });
   });

usersRouter.route('/:id')
   .get((req, res, next) => {
      
      User.findOne({
        _id: req.params.id,
      })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        next(err);
      });

   })
   .put((req, res) => {
      const { id } = req.params;
      const user = req.body;
      User.findByIdAndUpdate(id, {
          ...user,
        },
        { new: true }
      )
        .then(updatedUser => {
          res.json(updatedUser);
        })
        .catch((err) => {
          next(err);
        });
   })
   .delete((req, res) => {
      const { id } = req.params;
      User.findByIdAndDelete({
        _id: id,
      })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        next(err);
      });

   });

module.exports = usersRouter;
