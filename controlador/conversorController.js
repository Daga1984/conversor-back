const { convertirMoneda, convertirPeso, convertirTemperatura, convertirTiempo } = require('../operaciones/operaciones')

function moneda(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const v = parseFloat(valor);
    const resultado = convertirMoneda(v, desde, hasta);
    res.json({ resultado: resultado })
}

function temperatura(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const v = parseFloat(valor);
    const resultado = convertirTemperatura(v, desde, hasta);
    res.json({ resultado: resultado })
}

function tiempo(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const v = parseFloat(valor);
    const resultado = convertirTiempo(v, desde, hasta);
    res.json({ resultado: resultado })
}

function peso(req, res) {
    const { body } = req;
    const { valor, desde, hasta } = body;
    const v = parseFloat(valor);
    const resultado = convertirPeso(v, desde, hasta);
    res.json({ resultado: resultado })
}

module.exports = {
    moneda,
    temperatura,
    tiempo,
    peso

}
