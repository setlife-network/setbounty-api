module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBounty {
  count: Int!
}

type AggregateIssue {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Bounty {
  id: ID!
  createdAt: DateTime!
  amount: Int!
  postedBy: User
}

type BountyConnection {
  pageInfo: PageInfo!
  edges: [BountyEdge]!
  aggregate: AggregateBounty!
}

input BountyCreateInput {
  amount: Int!
  postedBy: UserCreateOneInput
}

input BountyCreateOneInput {
  create: BountyCreateInput
  connect: BountyWhereUniqueInput
}

type BountyEdge {
  node: Bounty!
  cursor: String!
}

enum BountyOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  amount_ASC
  amount_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BountyPreviousValues {
  id: ID!
  createdAt: DateTime!
  amount: Int!
}

type BountySubscriptionPayload {
  mutation: MutationType!
  node: Bounty
  updatedFields: [String!]
  previousValues: BountyPreviousValues
}

input BountySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BountyWhereInput
  AND: [BountySubscriptionWhereInput!]
  OR: [BountySubscriptionWhereInput!]
  NOT: [BountySubscriptionWhereInput!]
}

input BountyUpdateDataInput {
  amount: Int
  postedBy: UserUpdateOneInput
}

input BountyUpdateInput {
  amount: Int
  postedBy: UserUpdateOneInput
}

input BountyUpdateOneInput {
  create: BountyCreateInput
  update: BountyUpdateDataInput
  upsert: BountyUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: BountyWhereUniqueInput
}

input BountyUpsertNestedInput {
  update: BountyUpdateDataInput!
  create: BountyCreateInput!
}

input BountyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  amount: Int
  amount_not: Int
  amount_in: [Int!]
  amount_not_in: [Int!]
  amount_lt: Int
  amount_lte: Int
  amount_gt: Int
  amount_gte: Int
  postedBy: UserWhereInput
  AND: [BountyWhereInput!]
  OR: [BountyWhereInput!]
  NOT: [BountyWhereInput!]
}

input BountyWhereUniqueInput {
  id: ID
}

scalar DateTime

type Issue {
  id: ID!
  createdAt: DateTime!
  number: Int!
  author: User
  closed: Boolean!
  locked: Boolean!
  bounty: Bounty
}

type IssueConnection {
  pageInfo: PageInfo!
  edges: [IssueEdge]!
  aggregate: AggregateIssue!
}

input IssueCreateInput {
  number: Int!
  author: UserCreateOneInput
  closed: Boolean!
  locked: Boolean!
  bounty: BountyCreateOneInput
}

type IssueEdge {
  node: Issue!
  cursor: String!
}

enum IssueOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  number_ASC
  number_DESC
  closed_ASC
  closed_DESC
  locked_ASC
  locked_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type IssuePreviousValues {
  id: ID!
  createdAt: DateTime!
  number: Int!
  closed: Boolean!
  locked: Boolean!
}

type IssueSubscriptionPayload {
  mutation: MutationType!
  node: Issue
  updatedFields: [String!]
  previousValues: IssuePreviousValues
}

input IssueSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: IssueWhereInput
  AND: [IssueSubscriptionWhereInput!]
  OR: [IssueSubscriptionWhereInput!]
  NOT: [IssueSubscriptionWhereInput!]
}

input IssueUpdateInput {
  number: Int
  author: UserUpdateOneInput
  closed: Boolean
  locked: Boolean
  bounty: BountyUpdateOneInput
}

input IssueWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  number: Int
  number_not: Int
  number_in: [Int!]
  number_not_in: [Int!]
  number_lt: Int
  number_lte: Int
  number_gt: Int
  number_gte: Int
  author: UserWhereInput
  closed: Boolean
  closed_not: Boolean
  locked: Boolean
  locked_not: Boolean
  bounty: BountyWhereInput
  AND: [IssueWhereInput!]
  OR: [IssueWhereInput!]
  NOT: [IssueWhereInput!]
}

input IssueWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBounty(data: BountyCreateInput!): Bounty!
  updateBounty(data: BountyUpdateInput!, where: BountyWhereUniqueInput!): Bounty
  updateManyBounties(data: BountyUpdateInput!, where: BountyWhereInput): BatchPayload!
  upsertBounty(where: BountyWhereUniqueInput!, create: BountyCreateInput!, update: BountyUpdateInput!): Bounty!
  deleteBounty(where: BountyWhereUniqueInput!): Bounty
  deleteManyBounties(where: BountyWhereInput): BatchPayload!
  createIssue(data: IssueCreateInput!): Issue!
  updateIssue(data: IssueUpdateInput!, where: IssueWhereUniqueInput!): Issue
  updateManyIssues(data: IssueUpdateInput!, where: IssueWhereInput): BatchPayload!
  upsertIssue(where: IssueWhereUniqueInput!, create: IssueCreateInput!, update: IssueUpdateInput!): Issue!
  deleteIssue(where: IssueWhereUniqueInput!): Issue
  deleteManyIssues(where: IssueWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  bounty(where: BountyWhereUniqueInput!): Bounty
  bounties(where: BountyWhereInput, orderBy: BountyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Bounty]!
  bountiesConnection(where: BountyWhereInput, orderBy: BountyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BountyConnection!
  issue(where: IssueWhereUniqueInput!): Issue
  issues(where: IssueWhereInput, orderBy: IssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Issue]!
  issuesConnection(where: IssueWhereInput, orderBy: IssueOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): IssueConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  bounty(where: BountySubscriptionWhereInput): BountySubscriptionPayload
  issue(where: IssueSubscriptionWhereInput): IssueSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  username: String!
  email: String!
  balance: Int!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  username: String!
  email: String!
  balance: Int!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  balance_ASC
  balance_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  username: String!
  email: String!
  balance: Int!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  username: String
  email: String
  balance: Int
}

input UserUpdateInput {
  username: String
  email: String
  balance: Int
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  balance: Int
  balance_not: Int
  balance_in: [Int!]
  balance_not_in: [Int!]
  balance_lt: Int
  balance_lte: Int
  balance_gt: Int
  balance_gte: Int
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`
      }
    