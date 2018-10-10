import { RESTDataSource} from 'apollo-datasource-rest'

export default class GitHub extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://github.com/'
    }
    async authorize() {
        return this.get(`login/oauth/access_token?client_id=${process.env.CLIENT_ID}`)
    }
    async getToken(code) {
        console.log(code)
        return this.post('login/oauth/authorize', code)
    }
}