import {getPostsLogicFactory} from "./post.logic";
import { getQuery } from "../../utils/common/common.query";

export const getPostsLogic = getPostsLogicFactory(getQuery);