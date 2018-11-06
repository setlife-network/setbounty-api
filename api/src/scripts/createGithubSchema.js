const {
    makeRemoteExecutableSchema,
    transformSchema,
    RenameRootFields,
    RenameTypes
} = require('graphql-tools')
const { HttpLink } = require('apollo-link-http')
const fetch = require('node-fetch')
const path = require('path')
const fs = require('fs')
const config = require('../config')

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
const typeDefs = fs.readFileSync(
    path.resolve(__dirname, '../github.graphql'),
    { encoding: 'utf8' }
)

// Create remote executable schema based on schema definition and link
const githubSchema = makeRemoteExecutableSchema({
    schema: typeDefs,
    link
})

// transform schema
const transformedSchema = transformSchema(githubSchema, [
    new RenameTypes((name) => `Github${name}`),
    new RenameRootFields((operation, name) => `Github_${name}`),
])

module.exports = transformedSchema