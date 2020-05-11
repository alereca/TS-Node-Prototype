enum ErrorType {
  DbError = "DbError",
  NotFoundError = "NotFoundError",
}

export class AppError extends Error {
  status: number;
  message: string;
  displayMessage: string;

  constructor(params: {
    status: number;
    message: string;
    displayMessage: string;
    type: ErrorType;
    stack?: string;
  }) {
    super(params.message);
    this.name = params.type;
    this.message = params.message;
    this.status = params.status;
    this.displayMessage = params.displayMessage;
    this.stack = params.stack;
  }
}

const displayFatalError = (code: number) =>
  `Something went wrong. Error code: ${code}. Please report to support`;

export const DbError = (message: string, stack?: string): AppError =>
  new AppError({
    status: 500,
    type: ErrorType.DbError,
    displayMessage: displayFatalError(9845),
    message: message,
    stack: stack,
  });

const message = (id: number): string => `Item ${id} not found`;

export const NotFoundError = (itemId: number): AppError =>
  new AppError({
    status: 404,
    type: ErrorType.NotFoundError,
    displayMessage: message(itemId),
    message: message(itemId),
  });
