// https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express
import { ApolloServer } from 'apollo-server-express'
import * as bodyParser from 'body-parser'
import * as express from 'express'

import { verifyKunde } from './auth/jwt'
import { login } from './db/mongo'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/typeDefs'
import { logger } from './shared/logger'

const { Router } = express

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }: any) => {
        const token = req.headers.authorization
        const kunde = await verifyKunde(token)
        return { kunde }
    },
})

const app = express()
server.applyMiddleware({ app })

//  https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d
app.get('/', (req, res) => {
    res.send(`Hello World! ${req}`)
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Todo: Rest-Schnittstelle
const router = Router()
// router.get('/', (req, res) => {
// })
router.use('/', router)

const basePath = '/rest'
app.post(`${basePath}/login`, (request, response) => {
    login(request.body).then((result) => {
        response.send(result)
    })
})

app.listen({ port: 4000 }, () =>
    logger.info(
        `🚀 Server gestartet unter http://localhost:4000${server.graphqlPath}`,
    ),
)
