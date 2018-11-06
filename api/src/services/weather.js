import { makeRemoteExecutableSchema } from 'graphql-tools'
import { Binding } from 'graphql-binding'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'
import path from 'path'
import fs from 'fs'

export default class WeatherBinding extends Binding {
    constructor() {
        const typeDefs = fs.readFileSync(
            path.join(__dirname, '../schema/weather.graphql'),
            'utf-8'
        )

        const link = new HttpLink({
            uri: 'https://5rrx10z19.lp.gql.zone/graphql',
            fetch
        })

        const schema = makeRemoteExecutableSchema({
            schema: typeDefs,
            link
        })
        
        super({ schema }) 
    }
}