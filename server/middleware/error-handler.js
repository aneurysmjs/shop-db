module.exports = () => {
  return (err, req, res, next) => {
    console.error('errorHandler', err);
    res.status(500).send(err);
  };
};