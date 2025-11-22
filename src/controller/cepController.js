const services = require('../services/cepServices.js')
const cepUtils = require('../utils/validarCep.js')

//Pegar informaçoes do cpf
const getCepInfo = (req, res) => {
    const resultadoCep = services.procuraCep(req.params.cep);
    res.status(201).json(procuraCep)
}

//Validar CEP -> Deverá ser usado junto ao getCepInfo
const validateCep = (req, res) => {
    const resultadoValidacao = cepUtils.validar(req.params.cep);
    if(resultadoValidacao.valido == 1){
        res.status(200).json(resultadoValidacao);
    }
    else if(resultadoValidacao.valido == 0){
        res.status(400).json(resultadoValidacao);
    }
}

//Status da API
const getHealth = (req, res) => {
    const healthCheck = services.checkingHealth();
    res.status(200).json(healthCheck);
}
module.exports = {
    getCepInfo,
    validateCep,
    getHealth
}