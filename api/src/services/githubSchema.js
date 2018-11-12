import {
    makeExecutableSchema,
    makeRemoteExecutableSchema,
    transformSchema,
    RenameRootFields,
    RenameTypes
} from 'graphql-tools'
import path from 'path'
import fs from 'fs'
import config from '../config'
import GithubLink from './GithubLink'

const link = new GithubLink(config.github.token)

const typeDefs = fs.readFileSync(
    path.resolve(__dirname, '../schema/github.graphql'),
    { encoding: 'utf8' }
)

const schema = makeExecutableSchema({
    typeDefs,
    resolverValidationOptions: {
        requireResolversForResolveType: false
    }
})

// original github schema
export const githubSchema = makeRemoteExecutableSchema({
    schema: typeDefs,
    link
})

// github schema with transforms
export const transformedGithubSchema = transformSchema(githubSchema, [
    new RenameTypes(name => `Github${name}`),
    new RenameRootFields((operation, name) => `github_${name}`)
])

export default githubSchema