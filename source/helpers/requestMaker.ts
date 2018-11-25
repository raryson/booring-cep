import { get } from 'request'
import { CepInfos } from './interface'
const rp = require('request-promise')

export const getCep = async(cep: string): Promise<CepInfos> => {
    const options = {
        uri: `https://viacep.com.br/ws/${cep}/json/ `,
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    }

    return await rp(options)
}