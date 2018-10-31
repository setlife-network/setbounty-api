import {
    makeExecutableSchema,
    mergeSchemas,
} from 'graphql-tools'
import { importSchema } from 'graphql-import'
import createGithubSchema from './github'
import resolvers from '../resolvers'

export default async function createSchema() {
    const githubSchema= await createGithubSchema().catch(err => {
        console.log('Failed to create Github schema...')
        console.error(err)
    })

    // const setBountySchema = makeExecutableSchema({
    //     typeDefs: importSchema('src/schema/schema.graphql')
    // })

    const setBountySchema = importSchema('src/schema/schema.graphql')

    return mergeSchemas({
        schemas: [
            githubSchema,
            setBountySchema,
        ],
        resolvers
    })
}