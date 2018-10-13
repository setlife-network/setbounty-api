export function hello(_, { name }) {
    return `Hello ${name || 'World'}`
}