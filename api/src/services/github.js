import { RESTDataSource} from 'apollo-datasource-rest'
import config from '../config'

export default class GitHub extends RESTDataSource {
    constructor(...args) {
        super(args)
        this.baseURL = 'https://github.com/'
    }
    willSendRequest(req) {
        req.headers.set('Accept', 'application/json')
    }
    async authorize() {
        // this only opens authorize github page
        // TODO move to front end
        // TODO get code from redirect
        return this.get(`login/oauth/authorize?client_id=${config.github.clientId}`)
    }
    async getToken(code) {
        // TODO test this
        return this.post('login/oauth/access_token', {
            client_id: config.github.clientId,
            client_secret: config.github.clientSecret,
            code
        })
    }
}