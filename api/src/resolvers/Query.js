export default {
    hello(_, { name }) {
        return `Hello ${name || 'World'}`
    },
    // user(_, { username }, context) {
    //     return context.db.query.user({ where: { username }})
    // }
}