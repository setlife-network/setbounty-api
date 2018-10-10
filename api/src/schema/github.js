import {
    introspectSchema,
    makeRemoteExecutableSchema,
    transformSchema,
    RenameTypes,
    RenameRootFields
} from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import fetch from 'node-fetch'

const http = new HttpLink({
    uri: 'https://api.github.com/graphql',
    fetch
})

const link = setContext((request, previousContext) => {
    // console.log(request)
    // console.log(previousContext)
    return {
        headers: {
            // TODO use token returned from OAuth
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
            // Authorization: `Bearer ${previousContext.graphqlContext.authKey}`
        }
    }
}).concat(http)

export default async function createGithubSchema() {
    const schema = await introspectSchema(link)
    const githubSchema = makeRemoteExecutableSchema({
        schema,
        link
    })

    // TODO remove unnecessary Github API operations
    const transformedSchema = transformSchema(githubSchema, [
        new RenameTypes((name) => `Github${name}`),
        new RenameRootFields((operation, name) => `Github_${name}`),
    ])

    // return githubSchema
    return transformedSchema
}