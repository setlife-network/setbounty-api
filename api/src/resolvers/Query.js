export default {
    hello(_, { name }) {
        return `Hello ${name || 'World'}`
    }
}