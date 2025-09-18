const { convertirMoneda, convertirPeso, convertirTemperatura, convertirTiempo } = require('../operaciones/operaciones')

function moneda(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const resultado = convertirMoneda(valor, desde, hasta);
    res.json({ resultado: resultado })
}

function temperatura(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const resultado = convertirTemperatura(valor, desde, hasta);
    res.json({ resultado: resultado })
}

function tiempo(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const resultado = convertirTiempo(valor, desde, hasta);
    res.json({ resultado: resultado })
}

function peso(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const resultado = convertirPeso(valor, desde, hasta);
    res.json({ resultado: resultado })
}

module.exports = {
    moneda,
    temperatura,
    tiempo,
    peso
}