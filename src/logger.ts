import winston, { createLogger, transports } from "winston";

const consoleOptions: transports.ConsoleTransportOptions = {
  level: "info",
  handleExceptions: true,
  format: winston.format.simple(),
};

export const logger = createLogger({
  transports: [new transports.Console(consoleOptions)],
  exitOnError: false,
});
