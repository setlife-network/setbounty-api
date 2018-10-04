// Code generated by Prisma (prisma@1.17.1). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { GraphQLSchema } from "graphql";
import { IResolvers } from "graphql-tools/dist/Interfaces";
import { makePrismaClientClass, BaseClientOptions } from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  bounty: (where?: BountyWhereInput) => Promise<boolean>;
  issue: (where?: IssueWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export interface Fragmentable {
  $fragment<T>(fragment: string | Object): T;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;
  $getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;

  /**
   * Queries
   */

  bounty: (where: BountyWhereUniqueInput) => Bounty;
  bounties: (
    args?: {
      where?: BountyWhereInput;
      orderBy?: BountyOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<BountyNode>>;
  bountiesConnection: (
    args?: {
      where?: BountyWhereInput;
      orderBy?: BountyOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => BountyConnection;
  issue: (where: IssueWhereUniqueInput) => Issue;
  issues: (
    args?: {
      where?: IssueWhereInput;
      orderBy?: IssueOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<IssueNode>>;
  issuesConnection: (
    args?: {
      where?: IssueWhereInput;
      orderBy?: IssueOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => IssueConnection;
  user: (where: UserWhereUniqueInput) => User;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => Promise<Array<UserNode>>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnection;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createBounty: (data: BountyCreateInput) => Bounty;
  updateBounty: (
    args: { data: BountyUpdateInput; where: BountyWhereUniqueInput }
  ) => Bounty;
  updateManyBounties: (
    args: { data: BountyUpdateInput; where?: BountyWhereInput }
  ) => BatchPayload;
  upsertBounty: (
    args: {
      where: BountyWhereUniqueInput;
      create: BountyCreateInput;
      update: BountyUpdateInput;
    }
  ) => Bounty;
  deleteBounty: (where: BountyWhereUniqueInput) => Bounty;
  deleteManyBounties: (where?: BountyWhereInput) => BatchPayload;
  createIssue: (data: IssueCreateInput) => Issue;
  updateIssue: (
    args: { data: IssueUpdateInput; where: IssueWhereUniqueInput }
  ) => Issue;
  updateManyIssues: (
    args: { data: IssueUpdateInput; where?: IssueWhereInput }
  ) => BatchPayload;
  upsertIssue: (
    args: {
      where: IssueWhereUniqueInput;
      create: IssueCreateInput;
      update: IssueUpdateInput;
    }
  ) => Issue;
  deleteIssue: (where: IssueWhereUniqueInput) => Issue;
  deleteManyIssues: (where?: IssueWhereInput) => BatchPayload;
  createUser: (data: UserCreateInput) => User;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => User;
  updateManyUsers: (
    args: { data: UserUpdateInput; where?: UserWhereInput }
  ) => BatchPayload;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => User;
  deleteUser: (where: UserWhereUniqueInput) => User;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayload;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  bounty: (
    where?: BountySubscriptionWhereInput
  ) => BountySubscriptionPayloadSubscription;
  issue: (
    where?: IssueSubscriptionWhereInput
  ) => IssueSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type BountyOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "amount_ASC"
  | "amount_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type IssueOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "number_ASC"
  | "number_DESC"
  | "closed_ASC"
  | "closed_DESC"
  | "locked_ASC"
  | "locked_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "username_ASC"
  | "username_DESC"
  | "email_ASC"
  | "email_DESC"
  | "balance_ASC"
  | "balance_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export interface BountyCreateOneInput {
  create?: BountyCreateInput;
  connect?: BountyWhereUniqueInput;
}

export interface BountyCreateInput {
  amount: Int;
  postedBy?: UserCreateOneInput;
}

export interface IssueWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  number?: Int;
  number_not?: Int;
  number_in?: Int[] | Int;
  number_not_in?: Int[] | Int;
  number_lt?: Int;
  number_lte?: Int;
  number_gt?: Int;
  number_gte?: Int;
  author?: UserWhereInput;
  closed?: Boolean;
  closed_not?: Boolean;
  locked?: Boolean;
  locked_not?: Boolean;
  bounty?: BountyWhereInput;
  AND?: IssueWhereInput[] | IssueWhereInput;
  OR?: IssueWhereInput[] | IssueWhereInput;
  NOT?: IssueWhereInput[] | IssueWhereInput;
}

export type BountyWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface BountySubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: BountyWhereInput;
  AND?: BountySubscriptionWhereInput[] | BountySubscriptionWhereInput;
  OR?: BountySubscriptionWhereInput[] | BountySubscriptionWhereInput;
  NOT?: BountySubscriptionWhereInput[] | BountySubscriptionWhereInput;
}

export interface BountyWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  createdAt?: DateTimeInput;
  createdAt_not?: DateTimeInput;
  createdAt_in?: DateTimeInput[] | DateTimeInput;
  createdAt_not_in?: DateTimeInput[] | DateTimeInput;
  createdAt_lt?: DateTimeInput;
  createdAt_lte?: DateTimeInput;
  createdAt_gt?: DateTimeInput;
  createdAt_gte?: DateTimeInput;
  amount?: Int;
  amount_not?: Int;
  amount_in?: Int[] | Int;
  amount_not_in?: Int[] | Int;
  amount_lt?: Int;
  amount_lte?: Int;
  amount_gt?: Int;
  amount_gte?: Int;
  postedBy?: UserWhereInput;
  AND?: BountyWhereInput[] | BountyWhereInput;
  OR?: BountyWhereInput[] | BountyWhereInput;
  NOT?: BountyWhereInput[] | BountyWhereInput;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserUpdateInput {
  username?: String;
  email?: String;
  balance?: Int;
}

export interface UserUpdateDataInput {
  username?: String;
  email?: String;
  balance?: Int;
}

export interface BountyUpdateDataInput {
  amount?: Int;
  postedBy?: UserUpdateOneInput;
}

export interface UserUpdateOneInput {
  create?: UserCreateInput;
  update?: UserUpdateDataInput;
  upsert?: UserUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: UserWhereUniqueInput;
}

export interface IssueUpdateInput {
  number?: Int;
  author?: UserUpdateOneInput;
  closed?: Boolean;
  locked?: Boolean;
  bounty?: BountyUpdateOneInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
  username?: String;
  email?: String;
}>;

export type IssueWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  balance?: Int;
  balance_not?: Int;
  balance_in?: Int[] | Int;
  balance_not_in?: Int[] | Int;
  balance_lt?: Int;
  balance_lte?: Int;
  balance_gt?: Int;
  balance_gte?: Int;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export interface UserCreateOneInput {
  create?: UserCreateInput;
  connect?: UserWhereUniqueInput;
}

export interface UserCreateInput {
  username: String;
  email: String;
  balance: Int;
}

export interface BountyUpdateInput {
  amount?: Int;
  postedBy?: UserUpdateOneInput;
}

export interface IssueSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: IssueWhereInput;
  AND?: IssueSubscriptionWhereInput[] | IssueSubscriptionWhereInput;
  OR?: IssueSubscriptionWhereInput[] | IssueSubscriptionWhereInput;
  NOT?: IssueSubscriptionWhereInput[] | IssueSubscriptionWhereInput;
}

export interface BountyUpsertNestedInput {
  update: BountyUpdateDataInput;
  create: BountyCreateInput;
}

export interface IssueCreateInput {
  number: Int;
  author?: UserCreateOneInput;
  closed: Boolean;
  locked: Boolean;
  bounty?: BountyCreateOneInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface BountyUpdateOneInput {
  create?: BountyCreateInput;
  update?: BountyUpdateDataInput;
  upsert?: BountyUpsertNestedInput;
  delete?: Boolean;
  disconnect?: Boolean;
  connect?: BountyWhereUniqueInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface PageInfoNode {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfo extends Promise<PageInfoNode>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfoNode>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserPreviousValuesNode {
  id: ID_Output;
  username: String;
  email: String;
  balance: Int;
}

export interface UserPreviousValues
  extends Promise<UserPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  email: () => Promise<String>;
  balance: () => Promise<Int>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  balance: () => Promise<AsyncIterator<Int>>;
}

export interface BountyConnectionNode {}

export interface BountyConnection
  extends Promise<BountyConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<BountyEdgeNode>>>() => T;
  aggregate: <T = AggregateBounty>() => T;
}

export interface BountyConnectionSubscription
  extends Promise<AsyncIterator<BountyConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<BountyEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateBountySubscription>() => T;
}

export interface UserEdgeNode {
  cursor: String;
}

export interface UserEdge extends Promise<UserEdgeNode>, Fragmentable {
  node: <T = User>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdgeNode>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUserNode {
  count: Int;
}

export interface AggregateUser
  extends Promise<AggregateUserNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUserNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface IssueSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface IssueSubscriptionPayload
  extends Promise<IssueSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Issue>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = IssuePreviousValues>() => T;
}

export interface IssueSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<IssueSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = IssueSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = IssuePreviousValuesSubscription>() => T;
}

export interface UserConnectionNode {}

export interface UserConnection
  extends Promise<UserConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<UserEdgeNode>>>() => T;
  aggregate: <T = AggregateUser>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<UserEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface AggregateIssueNode {
  count: Int;
}

export interface AggregateIssue
  extends Promise<AggregateIssueNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateIssueSubscription
  extends Promise<AsyncIterator<AggregateIssueNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface IssueEdgeNode {
  cursor: String;
}

export interface IssueEdge extends Promise<IssueEdgeNode>, Fragmentable {
  node: <T = Issue>() => T;
  cursor: () => Promise<String>;
}

export interface IssueEdgeSubscription
  extends Promise<AsyncIterator<IssueEdgeNode>>,
    Fragmentable {
  node: <T = IssueSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface BatchPayloadNode {
  count: Long;
}

export interface BatchPayload extends Promise<BatchPayloadNode>, Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayloadNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface IssueNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  number: Int;
  closed: Boolean;
  locked: Boolean;
}

export interface Issue extends Promise<IssueNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  number: () => Promise<Int>;
  author: <T = User>() => T;
  closed: () => Promise<Boolean>;
  locked: () => Promise<Boolean>;
  bounty: <T = Bounty>() => T;
}

export interface IssueSubscription
  extends Promise<AsyncIterator<IssueNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  number: () => Promise<AsyncIterator<Int>>;
  author: <T = UserSubscription>() => T;
  closed: () => Promise<AsyncIterator<Boolean>>;
  locked: () => Promise<AsyncIterator<Boolean>>;
  bounty: <T = BountySubscription>() => T;
}

export interface BountyPreviousValuesNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  amount: Int;
}

export interface BountyPreviousValues
  extends Promise<BountyPreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  amount: () => Promise<Int>;
}

export interface BountyPreviousValuesSubscription
  extends Promise<AsyncIterator<BountyPreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  amount: () => Promise<AsyncIterator<Int>>;
}

export interface BountySubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface BountySubscriptionPayload
  extends Promise<BountySubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = Bounty>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = BountyPreviousValues>() => T;
}

export interface BountySubscriptionPayloadSubscription
  extends Promise<AsyncIterator<BountySubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = BountySubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = BountyPreviousValuesSubscription>() => T;
}

export interface IssuePreviousValuesNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  number: Int;
  closed: Boolean;
  locked: Boolean;
}

export interface IssuePreviousValues
  extends Promise<IssuePreviousValuesNode>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  number: () => Promise<Int>;
  closed: () => Promise<Boolean>;
  locked: () => Promise<Boolean>;
}

export interface IssuePreviousValuesSubscription
  extends Promise<AsyncIterator<IssuePreviousValuesNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  number: () => Promise<AsyncIterator<Int>>;
  closed: () => Promise<AsyncIterator<Boolean>>;
  locked: () => Promise<AsyncIterator<Boolean>>;
}

export interface UserNode {
  id: ID_Output;
  username: String;
  email: String;
  balance: Int;
}

export interface User extends Promise<UserNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  username: () => Promise<String>;
  email: () => Promise<String>;
  balance: () => Promise<Int>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<UserNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  username: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  balance: () => Promise<AsyncIterator<Int>>;
}

export interface AggregateBountyNode {
  count: Int;
}

export interface AggregateBounty
  extends Promise<AggregateBountyNode>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateBountySubscription
  extends Promise<AsyncIterator<AggregateBountyNode>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserSubscriptionPayloadNode {
  mutation: MutationType;
  updatedFields?: String[];
}

export interface UserSubscriptionPayload
  extends Promise<UserSubscriptionPayloadNode>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = User>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValues>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayloadNode>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface IssueConnectionNode {}

export interface IssueConnection
  extends Promise<IssueConnectionNode>,
    Fragmentable {
  pageInfo: <T = PageInfo>() => T;
  edges: <T = Promise<Array<IssueEdgeNode>>>() => T;
  aggregate: <T = AggregateIssue>() => T;
}

export interface IssueConnectionSubscription
  extends Promise<AsyncIterator<IssueConnectionNode>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<Array<IssueEdgeSubscription>>>>() => T;
  aggregate: <T = AggregateIssueSubscription>() => T;
}

export interface BountyNode {
  id: ID_Output;
  createdAt: DateTimeOutput;
  amount: Int;
}

export interface Bounty extends Promise<BountyNode>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  amount: () => Promise<Int>;
  postedBy: <T = User>() => T;
}

export interface BountySubscription
  extends Promise<AsyncIterator<BountyNode>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  amount: () => Promise<AsyncIterator<Int>>;
  postedBy: <T = UserSubscription>() => T;
}

export interface BountyEdgeNode {
  cursor: String;
}

export interface BountyEdge extends Promise<BountyEdgeNode>, Fragmentable {
  node: <T = Bounty>() => T;
  cursor: () => Promise<String>;
}

export interface BountyEdgeSubscription
  extends Promise<AsyncIterator<BountyEdgeNode>>,
    Fragmentable {
  node: <T = BountySubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

export type Long = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/**
 * Type Defs
 */

export const prisma: Prisma;
