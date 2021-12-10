import { NextFunction, Request, Response } from "express";
export const AuthMiddleware = (
  req: Request,
  rs: Response,
  next: NextFunction
) => {
  console.log("req", req);
  return next();
};
