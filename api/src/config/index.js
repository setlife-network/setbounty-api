require('dotenv').config()
export default {
    github: {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:4000/graphql',
        scope: 'notifications, read:repo_hook, repo, user, write:discussion',
        token: process.env.GITHUB_TOKEN
    },
    jwtSecret: process.env.JWT_SECRET
}