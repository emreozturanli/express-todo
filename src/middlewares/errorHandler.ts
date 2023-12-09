import { NextFunction, Request, Response } from "express";
import { CustomAPIError } from "../utils/customAPIError";

const errorHandler = (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomAPIError) {
    const errorStatusCode = res.statusCode ?? 500;
    res.status(errorStatusCode).send({
      error: true,
      status: err.status_code,
      message: err.message,
      cause: err.errorCause,
      payload: err.payload,
      id: err.id,
    });
  }
};

export { errorHandler };
