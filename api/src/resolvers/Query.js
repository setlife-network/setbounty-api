export default {
    hello: async (_, { name }, context) => {
        const code = await context.dataSources.github.authorize()
        console.log(code)
        return `Hello ${name || 'World'}`
    },
    // user(_, { username }, context) {
    //     return context.db.query.user({ where: { username }})
    // }
}