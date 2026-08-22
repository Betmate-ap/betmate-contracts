export var BetStatus;
(function (BetStatus) {
    BetStatus["Accepted"] = "ACCEPTED";
    BetStatus["Cancelled"] = "CANCELLED";
    BetStatus["Completed"] = "COMPLETED";
    BetStatus["Declined"] = "DECLINED";
    BetStatus["Expired"] = "EXPIRED";
    BetStatus["Pending"] = "PENDING";
    BetStatus["TeamsLocked"] = "TEAMS_LOCKED";
    BetStatus["TossDone"] = "TOSS_DONE";
})(BetStatus || (BetStatus = {}));
export var FriendshipStatus;
(function (FriendshipStatus) {
    FriendshipStatus["Accepted"] = "ACCEPTED";
    FriendshipStatus["Blocked"] = "BLOCKED";
    FriendshipStatus["Pending"] = "PENDING";
})(FriendshipStatus || (FriendshipStatus = {}));
export var MatchStatus;
(function (MatchStatus) {
    MatchStatus["Cancelled"] = "CANCELLED";
    MatchStatus["Completed"] = "COMPLETED";
    MatchStatus["Live"] = "LIVE";
    MatchStatus["Postponed"] = "POSTPONED";
    MatchStatus["Upcoming"] = "UPCOMING";
})(MatchStatus || (MatchStatus = {}));
