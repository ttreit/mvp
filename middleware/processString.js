const processString = function (req, res, next) {
  for (key in req.body) {
    req.body.set = key;
  }

next();
}

module.exports = processString;