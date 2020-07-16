const processString = function (req, res, next) {
  for (key in req.body) {
    const createSet = function(key) {
      return {
        set: key
      }
    }
    req.body.set = createSet(key);
    console.log('set ', req.body.set);
  }

next();
}

module.exports = processString;