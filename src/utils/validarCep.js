const validar = (cep) => {
    const cepNumber = RemoveLetters(cep);
    if(Object.keys(cepNumber).length == 8){
        return {
            "valido": 1,
            "cepLimpo": cepNumber 
        }
    }
    else {
        return {
            "valido": 0,
            "cepLimpo": cepNumber,
            "mensagemErro:": "Cep inválido."
        }
    }
}

function RemoveLetters(numeroCep){
    return numeroCep.replace(/[^0-9]/g, '');
}

module.exports = {
    validar
}