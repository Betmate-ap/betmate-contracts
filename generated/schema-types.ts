import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type Bet = {
  __typename?: 'Bet';
  challengee: User;
  challengeePick?: Maybe<Scalars['String']['output']>;
  challenger: User;
  challengerPick?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  match: Match;
  pointsStake: Scalars['Int']['output'];
  status: BetStatus;
  tossDoneAt?: Maybe<Scalars['String']['output']>;
  tossWinner?: Maybe<User>;
  updatedAt: Scalars['String']['output'];
  winner?: Maybe<User>;
};

export enum BetStatus {
  Accepted = 'ACCEPTED',
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Declined = 'DECLINED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  TeamsLocked = 'TEAMS_LOCKED',
  TossDone = 'TOSS_DONE'
}

export type Friendship = {
  __typename?: 'Friendship';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  receiver: User;
  requester: User;
  status: FriendshipStatus;
  updatedAt: Scalars['String']['output'];
};

export enum FriendshipStatus {
  Accepted = 'ACCEPTED',
  Blocked = 'BLOCKED',
  Pending = 'PENDING'
}

export type HeadToHead = {
  __typename?: 'HeadToHead';
  betmate: User;
  bets: Array<Bet>;
  myWins: Scalars['Int']['output'];
  netPoints: Scalars['Int']['output'];
  theirWins: Scalars['Int']['output'];
};

export type LeaderboardEntry = {
  __typename?: 'LeaderboardEntry';
  betsLost: Scalars['Int']['output'];
  betsWon: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  totalBets: Scalars['Int']['output'];
  user: User;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Match = {
  __typename?: 'Match';
  createdAt: Scalars['String']['output'];
  externalId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  scheduledAt: Scalars['String']['output'];
  status: MatchStatus;
  team1: Scalars['String']['output'];
  team2: Scalars['String']['output'];
  tournament: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  venue?: Maybe<Scalars['String']['output']>;
  winnerTeam?: Maybe<Scalars['String']['output']>;
};

export enum MatchStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Live = 'LIVE',
  Postponed = 'POSTPONED',
  Upcoming = 'UPCOMING'
}

export type Mutation = {
  __typename?: 'Mutation';
  acceptChallenge: Bet;
  acceptFriendRequest: Friendship;
  blockUser: Scalars['Boolean']['output'];
  declineChallenge: Scalars['Boolean']['output'];
  declineFriendRequest: Scalars['Boolean']['output'];
  flipCoin: Bet;
  forgotPassword: Scalars['Boolean']['output'];
  login: AuthPayload;
  logout: Scalars['Boolean']['output'];
  refreshToken: AuthPayload;
  removeBetmate: Scalars['Boolean']['output'];
  resetPassword: Scalars['Boolean']['output'];
  selectTeam: Bet;
  sendChallenge: Bet;
  sendFriendRequest: Friendship;
  sendVerificationEmail: Scalars['Boolean']['output'];
  signup: AuthPayload;
  unblockUser: Scalars['Boolean']['output'];
  verifyEmail: Scalars['Boolean']['output'];
};


export type MutationAcceptChallengeArgs = {
  betId: Scalars['ID']['input'];
};


export type MutationAcceptFriendRequestArgs = {
  friendshipId: Scalars['ID']['input'];
};


export type MutationBlockUserArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationDeclineChallengeArgs = {
  betId: Scalars['ID']['input'];
};


export type MutationDeclineFriendRequestArgs = {
  friendshipId: Scalars['ID']['input'];
};


export type MutationFlipCoinArgs = {
  betId: Scalars['ID']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRemoveBetmateArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationSelectTeamArgs = {
  input: SelectTeamInput;
};


export type MutationSendChallengeArgs = {
  input: SendChallengeInput;
};


export type MutationSendFriendRequestArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationSignupArgs = {
  input: SignupInput;
};


export type MutationUnblockUserArgs = {
  userId: Scalars['ID']['input'];
};


export type MutationVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  headToHead: HeadToHead;
  health: Scalars['String']['output'];
  leaderboard: Array<LeaderboardEntry>;
  match?: Maybe<Match>;
  matches: Array<Match>;
  me?: Maybe<User>;
  myBetmates: Array<User>;
  myBets: Array<Bet>;
  pendingFriendRequests: Array<Friendship>;
  searchUsers: Array<UserSearchResult>;
  sentFriendRequests: Array<Friendship>;
};


export type QueryHeadToHeadArgs = {
  betmateId: Scalars['ID']['input'];
};


export type QueryMatchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMatchesArgs = {
  status?: InputMaybe<MatchStatus>;
};


export type QueryMyBetsArgs = {
  status?: InputMaybe<BetStatus>;
};


export type QuerySearchUsersArgs = {
  query: Scalars['String']['input'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type SelectTeamInput = {
  betId: Scalars['ID']['input'];
  team: Scalars['String']['input'];
};

export type SendChallengeInput = {
  challengeeId: Scalars['ID']['input'];
  matchId: Scalars['ID']['input'];
};

export type SignupInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  emailVerified: Scalars['Boolean']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['String']['output']>;
  lastName: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type UserSearchResult = {
  __typename?: 'UserSearchResult';
  friendshipId?: Maybe<Scalars['ID']['output']>;
  friendshipStatus?: Maybe<FriendshipStatus>;
  user: User;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Bet: ResolverTypeWrapper<Bet>;
  BetStatus: BetStatus;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Friendship: ResolverTypeWrapper<Friendship>;
  FriendshipStatus: FriendshipStatus;
  HeadToHead: ResolverTypeWrapper<HeadToHead>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  LeaderboardEntry: ResolverTypeWrapper<LeaderboardEntry>;
  LoginInput: LoginInput;
  Match: ResolverTypeWrapper<Match>;
  MatchStatus: MatchStatus;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  ResetPasswordInput: ResetPasswordInput;
  SelectTeamInput: SelectTeamInput;
  SendChallengeInput: SendChallengeInput;
  SignupInput: SignupInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  User: ResolverTypeWrapper<User>;
  UserSearchResult: ResolverTypeWrapper<UserSearchResult>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AuthPayload: AuthPayload;
  Bet: Bet;
  Boolean: Scalars['Boolean']['output'];
  Friendship: Friendship;
  HeadToHead: HeadToHead;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  LeaderboardEntry: LeaderboardEntry;
  LoginInput: LoginInput;
  Match: Match;
  Mutation: {};
  Query: {};
  ResetPasswordInput: ResetPasswordInput;
  SelectTeamInput: SelectTeamInput;
  SendChallengeInput: SendChallengeInput;
  SignupInput: SignupInput;
  String: Scalars['String']['output'];
  User: User;
  UserSearchResult: UserSearchResult;
};

export type AuthPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload']> = {
  accessToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BetResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bet'] = ResolversParentTypes['Bet']> = {
  challengee?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  challengeePick?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  challenger?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  challengerPick?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  match?: Resolver<ResolversTypes['Match'], ParentType, ContextType>;
  pointsStake?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['BetStatus'], ParentType, ContextType>;
  tossDoneAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tossWinner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  winner?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FriendshipResolvers<ContextType = any, ParentType extends ResolversParentTypes['Friendship'] = ResolversParentTypes['Friendship']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  receiver?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  requester?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['FriendshipStatus'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HeadToHeadResolvers<ContextType = any, ParentType extends ResolversParentTypes['HeadToHead'] = ResolversParentTypes['HeadToHead']> = {
  betmate?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  bets?: Resolver<Array<ResolversTypes['Bet']>, ParentType, ContextType>;
  myWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  netPoints?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  theirWins?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LeaderboardEntryResolvers<ContextType = any, ParentType extends ResolversParentTypes['LeaderboardEntry'] = ResolversParentTypes['LeaderboardEntry']> = {
  betsLost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  betsWon?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  rank?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalBets?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MatchResolvers<ContextType = any, ParentType extends ResolversParentTypes['Match'] = ResolversParentTypes['Match']> = {
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  externalId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  scheduledAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['MatchStatus'], ParentType, ContextType>;
  team1?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tournament?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  venue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  winnerTeam?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  acceptChallenge?: Resolver<ResolversTypes['Bet'], ParentType, ContextType, RequireFields<MutationAcceptChallengeArgs, 'betId'>>;
  acceptFriendRequest?: Resolver<ResolversTypes['Friendship'], ParentType, ContextType, RequireFields<MutationAcceptFriendRequestArgs, 'friendshipId'>>;
  blockUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationBlockUserArgs, 'userId'>>;
  declineChallenge?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeclineChallengeArgs, 'betId'>>;
  declineFriendRequest?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeclineFriendRequestArgs, 'friendshipId'>>;
  flipCoin?: Resolver<ResolversTypes['Bet'], ParentType, ContextType, RequireFields<MutationFlipCoinArgs, 'betId'>>;
  forgotPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, 'email'>>;
  login?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  refreshToken?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType>;
  removeBetmate?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationRemoveBetmateArgs, 'userId'>>;
  resetPassword?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'input'>>;
  selectTeam?: Resolver<ResolversTypes['Bet'], ParentType, ContextType, RequireFields<MutationSelectTeamArgs, 'input'>>;
  sendChallenge?: Resolver<ResolversTypes['Bet'], ParentType, ContextType, RequireFields<MutationSendChallengeArgs, 'input'>>;
  sendFriendRequest?: Resolver<ResolversTypes['Friendship'], ParentType, ContextType, RequireFields<MutationSendFriendRequestArgs, 'userId'>>;
  sendVerificationEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  signup?: Resolver<ResolversTypes['AuthPayload'], ParentType, ContextType, RequireFields<MutationSignupArgs, 'input'>>;
  unblockUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationUnblockUserArgs, 'userId'>>;
  verifyEmail?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationVerifyEmailArgs, 'token'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  headToHead?: Resolver<ResolversTypes['HeadToHead'], ParentType, ContextType, RequireFields<QueryHeadToHeadArgs, 'betmateId'>>;
  health?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  leaderboard?: Resolver<Array<ResolversTypes['LeaderboardEntry']>, ParentType, ContextType>;
  match?: Resolver<Maybe<ResolversTypes['Match']>, ParentType, ContextType, RequireFields<QueryMatchArgs, 'id'>>;
  matches?: Resolver<Array<ResolversTypes['Match']>, ParentType, ContextType, Partial<QueryMatchesArgs>>;
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  myBetmates?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  myBets?: Resolver<Array<ResolversTypes['Bet']>, ParentType, ContextType, Partial<QueryMyBetsArgs>>;
  pendingFriendRequests?: Resolver<Array<ResolversTypes['Friendship']>, ParentType, ContextType>;
  searchUsers?: Resolver<Array<ResolversTypes['UserSearchResult']>, ParentType, ContextType, RequireFields<QuerySearchUsersArgs, 'query'>>;
  sentFriendRequests?: Resolver<Array<ResolversTypes['Friendship']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailVerified?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  isActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  points?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserSearchResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserSearchResult'] = ResolversParentTypes['UserSearchResult']> = {
  friendshipId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  friendshipStatus?: Resolver<Maybe<ResolversTypes['FriendshipStatus']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Bet?: BetResolvers<ContextType>;
  Friendship?: FriendshipResolvers<ContextType>;
  HeadToHead?: HeadToHeadResolvers<ContextType>;
  LeaderboardEntry?: LeaderboardEntryResolvers<ContextType>;
  Match?: MatchResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserSearchResult?: UserSearchResultResolvers<ContextType>;
};

