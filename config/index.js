const PORT = process.env.PORT || 27017;
const WEBPACK_PORT =
process.env.WEBPACK_PORT ||
(!isNaN(Number(process.env.PORT)) ? Number(process.env.PORT) + 1 : 8501);

module.exports = {
  PORT,
  WEBPACK_PORT,
};
