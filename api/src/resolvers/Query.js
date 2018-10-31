export function hello(parent, { name }, context, info) {
    return `Hello ${name || 'World'}`
}

// export function user(parent, args, context, info) {
//     return info.mergeInfo.delegateToSchema({
//         schema: 'github',
//         operation: 'query',
//         fieldName: 'Github_user',
//         args: {
//             login: args.login
//         },
//         context,
//         info
//     })
// }