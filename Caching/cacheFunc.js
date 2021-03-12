const Caching = require("./cache");

const cacheFunc = (duration) => {
  return (req, res, next) => {
    const key = "__express__" + (req.originalUrl || req.url);
    const cachedRes = Caching.getKeyValue(key);

    if (cachedRes) {
      res.send(cachedRes);
      return;
    } else {
      res.sendRes = res.send;

      res.send = (data) => {
        Caching.addKey(key, data, duration * 1000);
        res.sendRes(data);
      };
      next();
    }
  };
};

module.exports = cacheFunc;
