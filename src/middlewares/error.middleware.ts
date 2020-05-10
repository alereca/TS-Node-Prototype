import { Request, Response, NextFunction } from "express";
import winston, { createLogger, transports } from "winston";

const consoleOptions: transports.ConsoleTransportOptions = {
  level: "info",
  handleExceptions: true,
  format: winston.format.simple(),
};

const logger = createLogger({
  transports: [new transports.Console(consoleOptions)],
  exitOnError: false,
});

export const errorHandlingMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const status = 500;
  const message = "Something went wrong";

  logger.log({ level: "info", message: err.message });

  res.status(status).json({ message: message });
};
