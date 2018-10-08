import { ApolloServer } from 'apollo-server'
import createSchema from './schema'
// import schema from './schema'

async function runServer() {
    const schema = await createSchema()
    const server = new ApolloServer({
        schema
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