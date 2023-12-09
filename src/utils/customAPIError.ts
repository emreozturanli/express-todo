import { Request } from "express";
import { IErrorCauseType } from "../types";

export class CustomAPIError extends Error {
  // define the keys
  public status_code: number;
  public message: string;
  public errorCause: IErrorCauseType | undefined;
  public id: string | number | undefined;
  public payload: Request["body"];
  //add keys to constructor params
  constructor(
    status_code: number,
    message: string,
    errorCause?: IErrorCauseType,
    id?: string | number,
    payload?: Request["body"]
  ) {
    super(message);
    this.status_code = status_code;
    this.message = message;
    this.errorCause = errorCause;
    this.id = id;
    this.payload = payload;
  }
}

export const createCustomError = (
  statusCode: number,
  message: string,
  errorCause?: IErrorCauseType,
  id?: string | number,
  payload?: Request["body"]
) => {
  return new CustomAPIError(statusCode, message, errorCause, id, payload);
};
