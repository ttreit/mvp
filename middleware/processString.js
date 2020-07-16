const processString = function (req, res, next) {
  for (key in req.body) {
    req.body.set = key;
    console.log('set ', req.body.set, 'typeof: ', (typeof req.body.set));
  }

next();
}

module.exports = processString;