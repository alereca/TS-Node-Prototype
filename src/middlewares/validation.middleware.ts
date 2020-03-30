import { ObjectSchema } from "@hapi/joi";
import { Request, Response, NextFunction } from "express";

export const validateWith = (
  schema: ObjectSchema,
  property: "body" | "query" | "route"
) => (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = schema.validate(req.body);

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
