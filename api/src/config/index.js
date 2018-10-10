require('dotenv').config()
export default {
    github: {
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: 'http://localhost:4000/graphql',
        scope: 'repo user',
    },
    jwtSecret: process.env.JWT_SECRET
}