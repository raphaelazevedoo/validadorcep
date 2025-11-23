const checkingHealth = (req, res) => {
    const info = {
    uptime: process.uptime(),
    Status: 'OK',
    date: new Date()
    }

    return info
}

async function procuraCep(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const data = await response.json();
        return {
            cep: data.cep,
            logradouro: data.logradouro,
            bairro: data.bairro,
            cidade: data.localidade,
            estado: data.uf,
            valido: true
        }
    } catch (error) {
        console.error('Erro ao buscar o CEP:', error);
        return { error: 'Erro ao buscar o CEP' };
    }
}

module.exports = {
    checkingHealth,
    procuraCep
}