const { makeBindingClass } = require('graphql-binding')
const schema = require('../schema/github')

module.exports = makeBindingClass({ schema })