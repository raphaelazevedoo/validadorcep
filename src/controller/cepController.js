const services = require('../services/cepServices.js')
const cepUtils = require('../utils/validarCep.js')

//
const getCepInfo = async (req, res) => {
    const resultadoValidacao = cepUtils.validar(req.params.cep);
    if (resultadoValidacao.valido == 1) {
        const resultadoCep = await services.procuraCep(req.params.cep);
        res.status(200).json(resultadoCep);
    } else if (resultadoValidacao.valido == 0) {
        res.status(400).json({ error: 'CEP inválido' });
    }
}

//Status da API
const getHealth = (req, res) => {
    const healthCheck = services.checkingHealth();
    res.status(200).json(healthCheck);
}
module.exports = {
    getCepInfo,
    getHealth
}