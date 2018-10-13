require('dotenv').config()
export default {
    github: {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/graphql',
        scope: 'repo read:user user:email',
    },
    jwtSecret: process.env.JWT_SECRET
}