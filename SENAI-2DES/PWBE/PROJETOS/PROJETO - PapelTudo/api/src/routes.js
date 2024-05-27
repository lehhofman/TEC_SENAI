const express = require("express");
const router = express.Router();

const Item = require("./controllers/item");

const teste = (req, res) => {

    res.json("Back-end, API Inventário Papelaria PapelTudo respondendo!");

}

router.get("/", teste);
router.post("/api/item", Item.create);
router.get("/api/item", Item.read);
router.put("/api/item/:id", Item.update);
router.delete("/api/item/:id", Item.del);

module.exports = router;