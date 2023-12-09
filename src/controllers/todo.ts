import { Todo } from "../models/todo";
import { NextFunction, Request, Response } from "express";
import { createCustomError } from "../utils/customAPIError";
import { ValidationErrorItem } from "sequelize";
import { createErrorMessage } from "../utils/errorMessageCreator";

export const getTodoList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await Todo.findAndCountAll();
  if (data) {
    res.status(200).send({
      error: false,
      data: data.rows,
      message: "Todos successfully fetched",
      todoTotal: data.count,
    });
  } else {
    res.statusCode = 400;
    return next(createCustomError(res.statusCode, "No record found"));
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await Todo.create(req.body).catch((err) => {
    if (err.name === "SequelizeValidationError") {
      const errors: ValidationErrorItem[] = err.errors;
      const cause = createErrorMessage(errors);
      res.statusCode = 400;
      return next(
        createCustomError(
          res.statusCode,
          err.name,
          cause,
          req.params.id,
          req.body
        )
      );
    } else {
      res.statusCode = 404;
      return next(
        createCustomError(
          res.statusCode,
          "No record found",
          undefined,
          req.params.id,
          req.body
        )
      );
    }
  });
  if (data) {
    res.status(201).send({
      error: false,
      payload: req.body,
      message: "Todo successfully created",
      data: data,
    });
  }
};

export const getTodoById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await Todo.findByPk(req.params.id);
  if (data) {
    res.status(200).send({
      error: false,
      message: "Todo successfully fetched",
      data: data,
    });
  } else {
    res.statusCode = 404;
    return next(
      createCustomError(
        res.statusCode,
        "No record found",
        undefined,
        req.params.id,
        req.body
      )
    );
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isUpdated = await Todo.update(req.body, {
    where: { id: req.params.id },
  }).catch((err) => {
    if (err.name === "SequelizeValidationError") {
      const errors: ValidationErrorItem[] = err.errors;
      const cause = createErrorMessage(errors);
      res.statusCode = 400;
      return next(
        createCustomError(
          res.statusCode,
          err.name,
          cause,
          req.params.id,
          req.body
        )
      );
    } else {
      res.statusCode = 404;
      return next(
        createCustomError(
          res.statusCode,
          "No record found",
          undefined,
          req.params.id,
          req.body
        )
      );
    }
  });
  if (Array.isArray(isUpdated) && Boolean(isUpdated[0])) {
    res.status(202).send({
      error: false,
      payload: req.body,
      message: "Todo updated successfully",
      isUpdated: true,
      data: await Todo.findByPk(req.params.id),
    });
  } else {
    res.statusCode = 404;
    return next(
      createCustomError(
        res.statusCode,
        "No record found",
        undefined,
        req.params.id,
        req.body
      )
    );
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isDeleted = await Todo.destroy({ where: { id: req.params.id } });
  if (isDeleted) {
    res.status(200).send({
      error: false,
      message: "Todo deleted successfully",
      id: req.params.id,
    });
  } else {
    res.statusCode = 404;
    return next(
      createCustomError(
        res.statusCode,
        "No record found",
        undefined,
        req.params.id,
        req.body
      )
    );
  }
};
