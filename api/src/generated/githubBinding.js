const { makeBindingClass } = require('graphql-binding')
const schema = require('../scripts/createGithubSchema')

module.exports = makeBindingClass({ schema })