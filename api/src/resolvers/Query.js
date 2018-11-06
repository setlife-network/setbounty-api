export function hello(parent, { name }, context, info) {
    return `Hello ${name || 'World'}`
}

// export async function repository(parent, args, context, info) {
//     const repo = await context.dataSources.github.getRepo()
//     console.log(repo)
//     return {
//         name: repo.name,
//         hasBounties: false
//     }
// }

export function cities(parent, args, context, info) {
    const places = ['tampa', 'new york', 'gainesville', 'miami']
    return Promise.all(
        places.map(place => {
            return context.weather.query.location(
                { place },
                info,
                { context } // optional
            )
        })
    )
}

export function city(parent, args, context, info) {
    const place = 'tampa'
    return context.weather.query.location(
        { place },
        info,
        { context } // optional
    )
}