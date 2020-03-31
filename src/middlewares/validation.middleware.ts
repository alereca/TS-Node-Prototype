import { ObjectSchema, ValidationOptions } from "@hapi/joi";
import { Request, Response, NextFunction } from "express";
import { PostCreateDto } from "../entities/feed/post.create.dto";

export const validateWith = (
  schema: ObjectSchema,
  property: "body" | "query" | "route"
) => (req: Request, res: Response, next: NextFunction) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: true,
    stripUnknown: true
  });

  if (error) {
    res.status(430).json({
      status: "failed",
      error: {
        original: value,
        details: error.details.map(({ message }) => ({
          message: message.replace(/['"]/g, "")
        }))
      }
    });
  } else {
    next();
  }
};
