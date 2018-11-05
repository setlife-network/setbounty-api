import github from '../schema/github.js'

export function hello(parent, { name }, context, info) {
    return `Hello ${name || 'World'}`
}

export function customRepository(parent, args, context, info) {
    return info.mergeInfo.delegateToSchema({
        schema: github,
        operation: 'query',
        fieldName: 'repository',
        args: {
            owner: args.owner,
            name: args.name
        },
        context,
        info
    })
}