import { getPostsLogicFactory, savePostLogicFactory } from "./post.logic";
import { getFromRepoQuery, saveQuery } from "../../utils/common/common.query";

export const getPostsLogic = getPostsLogicFactory(getFromRepoQuery);

export const savePostLogic = savePostLogicFactory(saveQuery);
