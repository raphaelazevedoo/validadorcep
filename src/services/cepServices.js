const checkingHealth = (req, res) => {
    const info = {
    uptime: process.uptime(),
    Status: 'OK',
    date: new Date()
    }

    return info

}

const procuraCep = (cep) => {
    return("ok");
}

module.exports = {
    procuraCep,
    checkingHealth
}