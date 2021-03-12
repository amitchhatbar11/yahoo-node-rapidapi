const router = require("express").Router();
const Controller = require("./controller.js");
const cacheWrapper = require("../Caching/cacheFunc");
const { TIMEOUT } = require("./constants");

router.get("/yahoo-analysis", cacheWrapper(TIMEOUT), (req, res, next) => {
  return Controller.getAnalysis()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`getAnalysis err`, err);
      next("Something went wrong");
    });
});

router.get("/yahoo-news", cacheWrapper(TIMEOUT), (req, res, next) => {
  return Controller.getNews()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(`getNews err`, err);
      next("Something went wrong");
    });
});

module.exports = router;
