const express = require("express");
const router = express.Router();
const conversor = require('../controlador/conversorController')

router
    .post('/moneda', conversor.moneda)
    .post('/temperatura', conversor.temperatura)
    .post('/tiempo', conversor.tiempo)
    .post('/peso', conversor.peso)

module.exports = router;