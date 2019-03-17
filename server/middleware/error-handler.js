module.exports = () => {
  return (err, req, res, next) => {
    console.log('errorHandler', err);
    res.status(500);
  };
};