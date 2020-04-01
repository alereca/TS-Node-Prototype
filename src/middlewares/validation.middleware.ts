import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export const validateWith = <T>(
  type: { new (...args: any[]): T },
  property: "body" | "query" | "route"
) => (req: Request, res: Response, next: NextFunction) => {
  const value = new type(req[property]);
  validate(value).then(err => {
    if (err.length == 0) {
      next();
    } else {
      res.status(430).json({
        status: "failed",
        error: {
          original: value,
          details: err.map(val => ({ [val.property]: val.constraints }))
        }
      });
    }
  });
};
