import { RESTDataSource } from 'apollo-datasource-rest'
import config from '../config'

export default class GithubAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.github.com'
    }
    willSendRequest(request) {
        request.headers.set('Authorization', config.github.token)
        request.headers.set('Accept', 'application/vnd.github.v3+json')
    }
    async getUser(token) {
        return this.get('user', {
            access_token: token
        })
    }
}