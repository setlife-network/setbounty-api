import fetch from 'node-fetch'
import config from '../config'


// ! Initial endpoint for gettting github code
// https://github.com/login/oauth/authorize?client_id=249f628624647c891f18&scope=repo%20read:user%20user:email&redirect_uri=http://localhost:4000/

export async function getPrismaUser(context, username) {
    return await context.db.query.user({ where: { username }})
}

export async function getToken(code) {
    const endpoint = 'https://github.com/login/oauth/access_token'

    const data = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            client_id: config.github.clientID,
            client_secret: config.github.clientSecret,
            code
        })
    })
    .then(res => res.json())

    if (data.error) {
        throw new Error(JSON.stringify(data.error))
    }

    return data.access_token
}

export async function getUser(token) {
    const endpoint = `https://api.github.com/user?access_token=${token}`
    const data = await fetch(endpoint).then(res => res.json())

    if (data.error) {
        throw new Error(JSON.stringify(data.error))
    }

    return data
}