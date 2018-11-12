import githubSchema from '../services/githubSchema'

const repos = [
    { owner: 'setlife-network', name: 'setbounty' },
    { owner: 'setlife-network', name: 'setblocks' },
    { owner: 'setlife-network', name: 'tech-education' },
]

export function repositories(parent, args, context, info) {
    return Promise.all(
        repos.map(repo => {
            return info.mergeInfo.delegateToSchema({
                schema: githubSchema,
                operation: 'query',
                fieldName: 'repository',
                args: {
                    owner: repo.owner,
                    name: repo.name
                },
                context,
                info,
                transforms: githubSchema.transforms
            })
        })
    )
}

export function reposRest(parent, args, context, info) {
    return Promise.all(
        repos.map(repo => {
            return context.dataSources.github.getRepo(repo)
        })
    )
}

export function reposBinding(parent,args, context, info) {
    return Promise.all(
        repos.map(repo => {
            return context.github.query.repository(
                {
                    name: repo.name,
                    owner: repo.owner
                },
                info,
                { context }
            )
        })
    )
}