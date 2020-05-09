import {SPQTypedMap} from "./core/base.types";

export enum SPQRoutesString {
    SPQ_MAIN = "main",
    SPQ_AUTH = "auth",
    SPQ_TIMELINE = "timeline",
    SPQ_QUEST = "quest",
    SPQ_QUEST_STEP = "quest/:id",
    SPQ_USER_PROFILE = "profile",
    SPQ_NOT_FOUND = "not-found"
}

export const SPQRoutesMap: SPQTypedMap<string> = {
    [SPQRoutesString.SPQ_MAIN]: "/" + SPQRoutesString.SPQ_MAIN,
    [SPQRoutesString.SPQ_TIMELINE]: "/" + SPQRoutesString.SPQ_MAIN + "/" + SPQRoutesString.SPQ_TIMELINE,
    [SPQRoutesString.SPQ_USER_PROFILE]: "/" + SPQRoutesString.SPQ_MAIN + "/" + SPQRoutesString.SPQ_USER_PROFILE,
    [SPQRoutesString.SPQ_QUEST]: "/" + SPQRoutesString.SPQ_MAIN + "/" + SPQRoutesString.SPQ_QUEST,
    [SPQRoutesString.SPQ_QUEST_STEP]: "/" + SPQRoutesString.SPQ_MAIN + "/" + SPQRoutesString.SPQ_QUEST_STEP,
    [SPQRoutesString.SPQ_AUTH]: "/" + SPQRoutesString.SPQ_AUTH,
};

export const defaultAbsoluteRoute = SPQRoutesMap[SPQRoutesString.SPQ_TIMELINE];
