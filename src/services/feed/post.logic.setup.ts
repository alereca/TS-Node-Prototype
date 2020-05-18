import * as feedLogicFactories from "./post.logic";
import * as queries from "../../utils/common/common.query";

export const getPostsLogic = feedLogicFactories.getPostsLogicFactory(
  queries.getFromRepoQuery,
);

export const savePostLogic = feedLogicFactories.savePostLogicFactory(
  queries.saveQuery,
);
