import { createLogger, transports, format } from "winston";

const consoleOptions: transports.ConsoleTransportOptions = {
  handleExceptions: true,
  format: format.combine(format.json(), format.colorize()),
};

export const logger = createLogger({
  transports: [new transports.Console(consoleOptions)],
  exitOnError: false,
});
