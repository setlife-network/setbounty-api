import {
    makeRemoteExecutableSchema,
    transformSchema,
    RenameTypes,
    RenameRootFields,
    makeExecutableSchema
} from 'graphql-tools'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import path from 'path'
import fs from 'fs'
import config from '../config'

class GithubLink extends HttpLink {
    constructor(token) {
        if (!token) {
            throw new Error('No Github token provided. Create one here: https://github.com/settings/tokens (Guide: https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql)')
        }

        super({
            uri: 'https://api.github.com/graphql',
            headers: { Authorization: `Bearer ${token}` },
            fetch
        })
    }
}

// create HttpLink using personal auth token
const link = new GithubLink(config.github.token)

// Read github schema definition from local file
const githubTypeDefs = fs.readFileSync(
    path.resolve(__dirname, 'githubTypes.graphql'),
    { encoding: 'utf8' }
)

// Create GraphQLSchema with schema definition
const instrospectionSchema = makeExecutableSchema({
    typeDefs: githubTypeDefs,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
})

// Create remote executable schema based on schema definition and link
const githubSchema = makeRemoteExecutableSchema({
    schema: instrospectionSchema,
    link
})

// transform schema
// const transformedSchema = transformSchema(githubSchema, [
//     new RenameTypes((name) => `Github${name}`),
//     new RenameRootFields((operation, name) => `Github_${name}`),
// ])

// export default transformedSchema
export default githubSchema