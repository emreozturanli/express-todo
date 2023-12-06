import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodoList,
  updateTodo,
} from "../controllers/todo";

export const router = Router();

router.route("/").get(getTodoList).post(createTodo);

router.route("/:id").get(getTodoById).put(updateTodo).delete(deleteTodo);
