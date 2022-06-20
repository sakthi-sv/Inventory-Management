const ProductController = require("../controller/product");

const router = require("express").Router();

router.get("/", async (req, res) => {
  var result = await ProductController.getAllProducts();
  res.send("hello world" + result);
});

router.get("/:id", async (req, res) => {
  var result = await ProductController.getProduct(req.params.id);
  res.status(200).send(result);
});

router.post("/", async (req, res) => {
  try {
    var { id, name, price, quantity } = req.body;
    var result = await ProductController.createProduct({
      id,
      name,
      price,
      quantity,
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch("/", async (req, res) => {
  var id = req.body.id;
  var quantity = req.body.quantity;
  var result = await ProductController.updateProduct(id, { quantity });
  res.status(200).send("Item updated" + result);
});

router.delete("/:id", async (req, res) => {
  var id = req.params.id;
  var result = await ProductController.deleteProduct(id);
  res.status("200").send("Item deleted" + result);
});

module.exports = router;
