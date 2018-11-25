import * as express from 'express'
import { getCep } from './helpers/requestMaker'
import * as asyncHandler from 'express-async-handler'

const app = express()

app.get('/cep/:cep', asyncHandler(async (req: express.Request, res: express.Response) => {
    res.send(await getCep(req.params.cep))
}))

app.listen(3000, () => {
    console.log('listening at 3000')
})