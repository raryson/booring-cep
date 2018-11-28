import { CepInfos } from './interface'
const rp = require('request-promise')

export const getCep = (cep: string): CepInfos => {
    const options = {
        uri: `https://viacep.com.br/ws/${cep}/json/ `,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }

    return rp(options)
}