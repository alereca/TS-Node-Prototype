import { ObjectSchema, validate } from "joi";
import { Request, Response, NextFunction } from "express";

export const validateWith = (schema: ObjectSchema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { value, error } = validate(req.body, schema);

  if (error) {
    res.status(430).json({
      status: "failed",
      error: {
        original: error._object,
        details: error.details
      }
    });
  } else {
    next();
  }
};
