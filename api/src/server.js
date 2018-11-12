import { ApolloServer } from 'apollo-server'
import { Prisma } from 'prisma-binding'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema, mergeSchemas } from 'graphql-tools'

import config from './config'
import resolvers from './resolvers'
import GithubREST from './services/GithubREST'
import GithubBinding from './services/GithubBinding'
import { transformedGithubSchema } from './services/githubSchema'

const typeDefs = importSchema('src/schema/app.graphql')

const appSchema = makeExecutableSchema({ typeDefs })

const schema = mergeSchemas({
    schemas: [
        transformedGithubSchema,
        appSchema
    ],
    resolvers
})

const server = new ApolloServer({
    // typeDefs,
    // resolvers,
    schema,
    engine: {
        apiKey: process.env.ENGINE_API_KEY
    },
    formatResponse(res) {
        console.log(res)
        return res
    },
    dataSources: () => {
        return {
            github: new GithubREST()
        }
    },
    context: ({ req }) => {
        return {
            ...req,
            db: new Prisma({
                typeDefs: 'src/generated/prisma.graphql',
                endpoint: 'http://localhost:4466',
                secret: config.jwtSecret
            }),
            github: new GithubBinding(config.github.token),
        }
    }
})

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})