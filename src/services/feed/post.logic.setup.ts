import {getPostsLogicFactory} from "./post.logic";
import { getPostsQuery } from "../../utils/feed/post.query";

export const getPostsLogic = getPostsLogicFactory(getPostsQuery);