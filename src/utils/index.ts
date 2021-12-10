import { Response } from "express";
import { ErrorCode } from "@/enum";

export const fail = (res: Response, error: any, status = 400) => {
  const result = { success: false, status, data: null };
  if (error?.message) {
    const status = error?.status || result.status;
    const payload = error?.payload || {};
    Object.assign(result, { status, message: error?.message, payload });
  } else {
    Object.assign(result, { message: ErrorCode.Unknown_Error });
  }
  return res.status(status).send(result);
};
export const success = (
  res: Response,
  result = {},
  status = 200,
  payload = {}
) => {
  res.status(status).send({ success: true, status, data: result, ...payload });
};
