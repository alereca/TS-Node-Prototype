import { getPostsLogicFactory } from "./post.logic";
import { getFromRepoQuery } from "../../utils/common/common.query";

export const getPostsLogic = getPostsLogicFactory(getFromRepoQuery);
