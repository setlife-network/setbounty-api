import { RESTDataSource } from 'apollo-datasource-rest'

export default class GithubREST extends RESTDataSource {
    constructor(token) {
        super()
        this.baseURL = 'https://api.github.com'
        this.token = token
        console.log(token)
    }
    willSendRequest(request) {
        // TODO use token from headers
        request.headers.set('Authorization', this.token)
        request.headers.set('Accept', 'application/vnd.github.v3+json')
    }
    async getUser(token) {
        return this.get('user', {
            access_token: token
        })
    }
    async getRepo(params) {
        return this.get(`repos/${params.owner}/${params.name}`)
    }
}