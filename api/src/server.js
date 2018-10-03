import { ApolloServer } from 'apollo-server'
import { importSchema } from 'graphql-import'

import resolvers from './resolvers'
const typeDefs = importSchema('src/schema.graphql')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen({ port: 3000 }).then(({ url }) => {
    console.log(`Server ready at ${url}graphql`)
})