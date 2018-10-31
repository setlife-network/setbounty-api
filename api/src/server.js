import { ApolloServer } from 'apollo-server'
import { Prisma } from 'prisma-binding'

import createSchema from './schema'
import config from './config'
import GithubAPI from './services/GithubAPI'

const isDev = process.env.NODE_ENV === 'development'

async function runServer() {
    const schema = await createSchema()
    const server = new ApolloServer({
        schema,
        dataSources: () => {
            return {
                github: new GithubAPI()
            }
        },
        context: ({ req }) => {
            return {
                ...req,
                db: new Prisma({
                    typeDefs: 'src/generated/prisma.graphql',
                    endpoint: 'http://localhost:4466',
                    secret: config.jwtSecret
                })
            }
        }
    })

    server.listen({ port: 4000 }).then(({ url }) => {
        console.log(`🚀  Server ready at ${url}graphql`)
    })
}

try {
    runServer()
} catch (err) {
    console.error(err)
}