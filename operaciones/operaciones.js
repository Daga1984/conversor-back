function convertirTiempo(valor, desde, hasta) {
    const tiempo = {
        segundo: 1,
        minuto: 60,
        hora: 3600,
        dia: 86400,
        mes: 2592000,
        año: 31536000
    }
    const convertir = (valor * tiempo[desde]);
    const res = convertir / tiempo[hasta];
    return Math.round(res * 100) / 100
}


function convertirPeso(valor, desde, hasta) {
    const peso = {
        gramo: 1,
        libra: 453.6,
        kilogramo: 1000
    }
    const convertir = (valor * peso[desde]);
    const res = convertir / peso[hasta];
    return Math.round(res * 100) / 100
}


function convertirMoneda(valor, desde, hasta) {
    const moneda = {
        cop: 3890,
        usd: 1,
        eur: 0.84
    }
    const convertir = (valor / moneda[desde]);
    const res = convertir * moneda[hasta];
    return Math.round(res * 100) / 100
}


function convertirTemperatura(valor, desde, hasta) {
    const conversiones = {
        celsius: {
            celsius: (valor) => valor,
            fahrenheit: (valor) => (valor * 9 / 5) + 32,
            kelvin: (valor) => valor + 273.15
        },
        fahrenheit: {
            celsius: (valor) => (valor - 32) * 5 / 9,
            fahrenheit: (valor) => valor,
            kelvin: (valor) => ((valor - 32) * 5 / 9) + 273.15
        },
        kelvin: {
            celsius: (valor) => valor - 273.15,
            fahrenheit: (valor) => ((valor - 273.15) * 9 / 5) + 32,
            kelvin: (valor) => valor
        }
    };

    return Math.round((conversiones[desde][hasta](valor)) * 100) / 100;
}

module.exports = {
    convertirMoneda,
    convertirPeso,
    convertirTemperatura,
    convertirTiempo

}


