import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import issueRouter from "../routers/issues.ts";

const app = new Hono();

app.use(logger());
app.use("*", cors());
app.route("/issues", issueRouter);

export default app;
