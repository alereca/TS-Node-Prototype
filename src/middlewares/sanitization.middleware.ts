import { Request, Response, NextFunction } from "express";
import { sanitizeAsync, sanitize } from "@neuralegion/class-sanitizer";

export const sanitizeWith = <T>(type: { new (...args: any[]): T }) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = new type(req.body);
  sanitize(body);

  req.body = body;

  next(); 
};
