import { NextFunction, Request, Response } from "express";

const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  const errorStatusCode = res.statusCode ?? 500
    res.status(errorStatusCode).send({
        error: true, 
        message: err.message, 
        body: req.body,
    })
};

export {errorHandler}