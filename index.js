const express = require("express");
const app = express();
const router = require("./Main/router.js");

app.use("/", router);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
