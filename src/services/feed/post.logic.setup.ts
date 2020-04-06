import {getPostsLogicFactory} from "./post.logic";
import { getFromRepoQuery } from "../../utils/common/post.query";

export const getPostsLogic = getPostsLogicFactory(getFromRepoQuery);