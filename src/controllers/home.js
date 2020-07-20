const axios = require('axios')

exports.home = (req, res) => {
    const cidade = req.query.cidade
    if (cidade != '') {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios/${cidade}`)
            .then(function (response) {
                res.render('pages/home', {
                    cidade: response.data
                })
            }).catch(error => {
                console.log(error);
                res.send('erro ')
            })
    } else {
        res.render('pages/home')
    }
}