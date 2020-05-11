import { Request, Response, NextFunction } from "express";
import { AppError } from "src/utils/errors/errors";
import { logger } from "../logger";

export const errorHandlingMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  // TO-DO: log full stack trace
  logger.log({
    level: "info",
    message: `${err.name} => ${err.message}\n ${err.stack}`,
  });

  res.status(err.status).json({ message: err.displayMessage });
};
