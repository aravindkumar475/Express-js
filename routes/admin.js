const express = require('express');
const router = express.Router();
router.get("/add-product", (req, res, next) => {
  res.send(
    '<h1>Hello</h1><form action="/store-product" method="POST" ><input type="text" name="title" /> <input type="submit" value="Submit"/></form>'
  );
});

router.post("/store-product", (req, res) => {
  console.log("Formdata:", req.body);
  res.send('<b>Productn Submited!</b>')
});

module.exports = router;
