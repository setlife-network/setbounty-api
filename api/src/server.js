import { ApolloServer } from 'apollo-server'
import { Prisma } from 'prisma-binding'
import { importSchema } from 'graphql-import'

import config from './config'
import resolvers from './resolvers'
import GithubAPI from './services/GithubAPI'
import GithubBinding from './services/GithubBinding'
import WeatherBinding from './services/weather'
// import githubBinding from './generated/githubBinding'

const isDev = process.env.NODE_ENV === 'development'

const favoriteRepos = [
    { owner: 'graphcool', name: 'graphql-yoga' },
    { owner: 'graphql', name: 'graphql-js' },
]

const typeDefs = importSchema('src/schema/app.graphql')

const server = new ApolloServer({
    typeDefs,
    resolvers,
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
            }),
            github: new GithubBinding(config.github.token),
            weather: new WeatherBinding()
        }
    }
})

server.listen({ port: 4000 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})