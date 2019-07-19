import jwt from 'jsonwebtoken'
import fetch from 'node-fetch'
import axios from 'axios'
import config from '../config'

// ! Initial endpoint for gettting github authorization code
// 'https://github.com/login/oauth/authorize?client_id=249f628624647c891f18&scope=repo%20read:user%20user:email&redirect_uri=http://localhost:4000/login/github'

// export async function getGithubToken(code) {
//     const endpoint = 'https://github.com/login/oauth/access_token'

//     const data = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             client_id: config.github.clientID,
//             client_secret: config.github.clientSecret,
//             code
//         })
//     })
//     .then(res => res.json())

//     if (data.error) {
//         throw new Error(JSON.stringify(data.error))
//     }

//     return data.access_token
// }
export async function getGithubToken(code) {
    const data = await axios.post(
        'https://github.com/login/oauth/access_token', 
        {
            client_id: config.github.clientID,
            client_secret: config.github.clientSecret,
            code
        }
    )

    console.log(data)

    if (data.error) {
        throw new Error(JSON.stringify(data.error))
    }

    return data.access_token
}

// export async function getGithubUser(token) {
//     const endpoint = `https://api.github.com/user?access_token=${token}`
//     const data = await fetch(endpoint).then(res => res.json())

//     if (data.error) {
//         throw new Error(JSON.stringify(data.error))
//     }

//     return data
// }

export async function getGithubUser(token) {
    const endpoint = `https://api.github.com/user?access_token=${token}`
    const data = await axios.get(endpoint)

    if (data.error) {
        throw new Error(JSON.stringify(data.error))
    }

    return data
}

export async function getPrismaUser(context, login) {
    return await context.db.query.user({ where: { login }})
}

export function getUserId(context) {
    // retrieve Authorization header
    const Authorization = context.request.get('Authorization')
    if (Authorization) {
        // trim 'Bearer ' from header
        const token = Authorization.replace('Bearer ', '')
        // verify jwt and retrieve user id
        const { userId } = jwt.verify(token, config.jwtSecret)
        return userId
    }

    throw new Error('Not authorized')
}