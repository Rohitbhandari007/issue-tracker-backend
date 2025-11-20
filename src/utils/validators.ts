// utils/validators.ts
import { validator } from "hono/validator";
import type { z } from "zod";

export const zodJsonValidator = <T extends z.ZodType>(schema: T) => {
  return validator("json", (value, c) => {
    const result = schema.safeParse(value);
    if (!result.success) {
      return c.json(
        {
          success: false,
          error: result.error.issues,
        },
        400
      );
    }
    return result.data;
  });
};

export const zodParamValidator = <T extends z.ZodType>(schema: T) => {
  return validator("param", (value, c) => {
    const result = schema.safeParse(value);
    if (!result.success) {
      return c.json(
        {
          success: false,
          error: result.error.issues,
        },
        400
      );
    }
    return result.data;
  });
};
