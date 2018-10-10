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

    const github = await createGithubSchema().catch(err => {
        console.log('Failed to create Github schema...')
        console.error(err)
    })

    return mergeSchemas({
        schemas: [
            setBounty,
            github
        ]
    })
}