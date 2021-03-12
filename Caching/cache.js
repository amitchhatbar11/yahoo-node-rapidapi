const cache = require("memory-cache");

const addKey = (key, value, aliveTime) => {
  cache.put(key, value, aliveTime);
};

const getKeyValue = (key) => {
  return cache.get(key);
};

const Caching = {
  addKey,
  getKeyValue,
};

module.exports = Caching;
