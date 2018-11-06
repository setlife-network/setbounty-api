import {
    makeRemoteExecutableSchema,
    transformSchema,
    RenameRootFields,
    RenameTypes
} from 'graphql-tools'
import { Binding } from 'graphql-binding'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import path from 'path'
import fs from 'fs'

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

export default class GithubBinding extends Binding {
    constructor(token) {
        // Read github schema definition from local file
        const typeDefs = fs.readFileSync(
            path.join(__dirname, '../schema/github.graphql'),
            'utf-8'
        )

        // const githubSchema = makeExecutableSchema({
        //     typeDefs,
        //     resolverValidationOptions: {
        //         requireResolversForResolveType: false
        //     }
        // })

        const schema = makeRemoteExecutableSchema({
            schema: typeDefs,
            // schema: githubSchema,
            link: new GithubLink(token),
        })

        // const transformedSchema = transformSchema(schema, [
        //     new RenameTypes((name) => `Github${name}`),
        //     new RenameRootFields((operation, name) => `Github_${name}`),
        // ])
        
        super({ schema })
    }
}