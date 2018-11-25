import * as express from 'express'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('eae')
})

app.listen(3000, () => {
    console.log('listening at 3000')
})