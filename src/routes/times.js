const express = require("express");
const router = express.Router();
const timescontroll = require("../controllers/funções");
router.post("/", timescontroll.criarTime)
router.get("/", timescontroll.listarTimes)
router.put("/:id", timescontroll.atualizarTime)
router.delete("/:id", timescontroll.deletarTime)
module.exports = router