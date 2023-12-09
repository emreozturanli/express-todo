import { DataTypes } from "sequelize";
import { sequelize } from "../middlewares/dbConnection";

// sequelize.define('tableName', { columns })
const Todo = sequelize.define("todo", {
  title: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT("medium"),
    allowNull: false,
  },

  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

export { Todo };
