import {
    introspectSchema,
    makeRemoteExecutableSchema
} from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'node-fetch'

const http = new HttpLink({
    uri: 'https://api.github.com/graphql',
    fetch
})

const link = setContext((request, previousContext) => ({
    headers: {
      'Authorization': `Bearer 8437d8043a168d3cc9d8fe80b084aadf76cb9695`,
    }
})).concat(http)

export default async function createSchema() {
    const schema = await introspectSchema(link)
    const executableSchema = makeRemoteExecutableSchema({
        schema,
        link
    })

    return executableSchema
}