import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";
import { InputDto } from "../entities/input.dto";
import { PostCreateDto } from "../entities/feed/post.create.dto";

export const validateWith = <T>(property: "body" | "query" | "route") => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  validate(new PostCreateDto(req.body)).then(err => {
    if (err.length == 0) {
      next();
    } else {
      res.status(430).json({
        status: "failed",
        error: {
          original: new PostCreateDto(req.body),
          details: err.map(val => ({ [val.property]: val.constraints }))
        }
      });
    }
  });
};
