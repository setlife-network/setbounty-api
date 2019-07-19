import { check as isReserved } from 'github-reserved-names'

export const getCleanPathname = location.pathname.replace(/^[/]|[/]$/g, '')

export function getRepoPath() {
    if (!isRepo()) {
        return false
    }

    const match = /^[^/]+[/][^/]+[/]?(.*)$/.exec(getCleanPathname())
	return match && match[1]
}

export const getRepoUrl = () => location.pathname.slice(1).split('/', 2).join('/')

export const isDashboard = () => /^$|^(orgs[/][^/]+[/])?dashboard([/]|$)/.test(getCleanPathname())

export const isGist = () => location.hostname.startsWith('gist.') || location.pathname.startsWith('gist/')

export const isIssue = () => /^issues\/\d+/.test(getRepoPath())

export const isIssueList = () => /^(issues$|pulls$|labels\/)/.test(getRepoPath())

export const isNotifications = () => /^([^/]+[/][^/]+\/)?notifications/.test(getCleanPathname())

export const isPR = () => /^pull\/\d+/.test(getRepoPath())

export const isPRConversation = () => /^pull\/\d+$/.test(getRepoPath())

