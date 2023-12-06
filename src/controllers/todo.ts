import { Todo } from "../models/todo";
import { Request, Response } from "express";

export const getTodoList = async (req: Request, res: Response) => {
  const data = await Todo.findAndCountAll();
  res.status(200).send({
    error: false,
    data: data.rows,
    message: "Todos successfully fetched",
    todoTotal: data.count,
  });
};

export const createTodo = async (req: Request, res: Response) => {
  const data = await Todo.create(req.body);
  res.status(201).send({
    error: false,
    payload: req.body,
    message: "Created",
    data: data,
  });
};

export const getTodoById = async (req: Request, res: Response) => {
  const data = await Todo.findByPk(req.params.id);
  res.status(200).send({
    error: false,
    message: "Todo successfully fetched",
    data: data,
  });
};

export const updateTodo = async (req: Request, res: Response) => {
  const isUpdated = await Todo.update(req.body, {
    where: { id: req.params.id },
  });
  res.status(202).send({
    error: false,
    payload: req.body,
    message: "Todo updated successfully",
    isUpdated: Boolean(isUpdated[0]),
    data: await Todo.findByPk(req.params.id),
  });
};

export const deleteTodo = async (req: Request, res: Response) => {
  const isDeleted = await Todo.destroy({ where: { id: req.params.id } });
  if (isDeleted) {
    res.status(200).send({
      error: false,
      message: "Todo deleted successfully",
    });
  } else {
    res.status(404).send({
      error: true,
      message: "Todo not found",
      id: req.params.id,
    });
  }
};
