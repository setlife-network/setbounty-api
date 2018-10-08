import {
    makeExecutableSchema,
    mergeSchemas,
} from 'graphql-tools'
import { importSchema } from 'graphql-import'
import createGithubSchema from './github'
import resolvers from '../resolvers'

export default async function createSchema() {
    const setBounty = makeExecutableSchema({
        typeDefs: importSchema('src/schema/schema.graphql'),
        resolvers,
        resolverValidationOptions: {
            requireResolversForResolveType: false
        }
    })

    const github = await createGithubSchema()

    return mergeSchemas({
        schemas: [
            setBounty,
            github
        ]
    })
}