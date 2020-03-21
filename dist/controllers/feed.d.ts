import { Request, Response, NextFunction } from "express";
import { Post } from "../entities/Post";
export declare const getPosts: (req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response<any>, next: NextFunction) => Promise<Response<Post[]>>;
