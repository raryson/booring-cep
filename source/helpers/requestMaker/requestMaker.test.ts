import { getCep } from './requestMaker'
import { CepInfos } from './interface'

const stubCPFResult: CepInfos = {
     cep:'94030-000',
     logradouro:'Avenida Dorival Cândido Luz de Oliveira',
     complemento:'até 2788 - lado par',
     bairro:'COHAB C',
     localidade:'Gravataí',
     uf:'RS',
     unidade:'',
     ibge:'4309209',
     gia:''
    }

describe('Create request maker Suite', () => {
    test('Test request when has valid CPF', async () => {
        expect(await getCep('94030000')).toEqual(stubCPFResult)
    })
})
