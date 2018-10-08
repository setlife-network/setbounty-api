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
        'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
        // Authorization: `Bearer ${previousContext.graphqlContext.authKey}`
    }
})).concat(http)

export default async function createGithubSchema() {
    const schema = await introspectSchema(link)
    const githubSchema = makeRemoteExecutableSchema({
        schema,
        link
    })

    return githubSchema
}