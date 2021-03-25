const timeStamp = (req, res, next) => {
  res.headers.timeStamp = Date.now();
  next();
};

module.exports = { timeStamp };
