import {
    makeExecutableSchema,
    mergeSchemas,
} from 'graphql-tools'
import { importSchema } from 'graphql-import'
import githubSchema from './github'
import resolvers from '../resolvers'

// const setBountySchema = makeExecutableSchema({
//     typeDefs: importSchema('src/schema/setBounty.graphql'),
//     resolvers
// })

const setBountySchema = importSchema('src/schema/setBounty.graphql')

export default mergeSchemas({
    schemas: [
        githubSchema,
        setBountySchema,
    ],
    resolvers
})