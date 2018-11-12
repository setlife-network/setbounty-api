import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default class GithubLink extends HttpLink {
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