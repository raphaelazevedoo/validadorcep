const express = require('express');
const router = express.Router();
const CepController = require('../controller/cepController')

router.get('/health', CepController.getHealth);
router.get('/cep/:cep', CepController.getCepInfo);

module.exports = router