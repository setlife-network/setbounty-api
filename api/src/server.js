require('dotenv').config()

import { ApolloServer } from 'apollo-server'
import { Prisma } from 'prisma-binding'
import createSchema from './schema'
// import GitHub from './services/github'

async function runServer() {
    const schema = await createSchema()
    const server = new ApolloServer({
        schema,
        context: req => {
            return {
                ...req,
                db: new Prisma({
                    typeDefs: 'src/generated/prisma.graphql',
                    endpoint: 'http://localhost:4466',
                    secret: process.env.JWT_SECRET
                })
            }
        },
        // dataSources() {
        //     return {
        //         github: new GitHub()
        //     }
        // }
    })

    server.listen({ port: 4000 }).then(({ url }) => {
        console.log(`Server ready at ${url}graphql`)
    })
}

try {
    runServer()
} catch (err) {
    console.error(err)
}