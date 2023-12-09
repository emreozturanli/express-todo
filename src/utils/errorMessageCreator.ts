import { ValidationErrorItem } from "sequelize";

export const createErrorMessage = (errors: ValidationErrorItem[]) => {
  return errors.map((seqErr) => {
    if (seqErr.path) {
      return { [seqErr.path]: seqErr.message };
    }
  });
};
