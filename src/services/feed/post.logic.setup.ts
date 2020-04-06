import {getPostsLogicFactory} from "./post.logic";
import { getPostsQuery } from "../../utils/common/post.query";

export const getPostsLogic = getPostsLogicFactory(getPostsQuery);