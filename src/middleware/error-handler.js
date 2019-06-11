module.exports = () => {
  return (err, req, res, next) => {
    res.status(400).send(err);
  };
};