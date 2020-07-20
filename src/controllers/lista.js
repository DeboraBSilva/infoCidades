const axios = require('axios')

exports.lista = (req, res) => {
    const uf = req.query.uf
    if (uf != '') {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
            .then(function (response) {
                res.render('pages/lista', {
                    cidades: response.data
                })
            }).catch(error => {
                console.log(error);
                res.send('erro ')
            })
    } else {
        res.render('pages/lista')
    }
}