import { Hono } from "hono";
import { zodJsonValidator, zodParamValidator } from "../utils/validators.ts";
import {
  createIssueSchema,
  issueIdParamSchema,
  updateIssueSchema,
} from "../schemas/issue.ts";
import * as issueService from "../services/issueService.ts";
import { jsonResponse } from "../utils/jsonResponse.ts";
import type { IssueCreateInput, IssueUpdateInput } from "../types/issues.ts";

const issueRouter = new Hono();

issueRouter.get("/", async (c) => {
  const search = c.req.query("search") || undefined;
  const status = c.req.query("status") || undefined;
  const page = Number(c.req.query("page") || 1);
  const limit = Number(c.req.query("limit") || 10);
  const skip = (page - 1) * limit;
  const take = limit;

  const [issues, total] = await Promise.all([
    issueService.fetchIssues({ search, status, skip, take }),
    issueService.getIssuesCount({ search, status }),
  ]);
  return c.json(
    jsonResponse({
      items: issues,
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    })
  );
});

issueRouter.get("/:id", zodParamValidator(issueIdParamSchema), async (c) => {
  const id = Number(c.req.param("id"));
  const issue = await issueService.fetchIssueById(id);
  if (!issue) return c.json(jsonResponse(null, 404, "Issue not found"), 404);
  return c.json(jsonResponse(issue));
});

issueRouter.post("/", zodJsonValidator(createIssueSchema), async (c) => {
  const validated = c.req.valid("json") as IssueCreateInput;
  const issue = await issueService.addIssue(validated);
  return c.json(jsonResponse(issue, 201), 201);
});

issueRouter.put(
  "/:id",
  zodParamValidator(issueIdParamSchema),
  zodJsonValidator(updateIssueSchema),
  async (c) => {
    const id = Number(c.req.param("id"));
    const validated = c.req.valid("json") as IssueUpdateInput;
    const issue = await issueService.editIssue(id, validated);
    return c.json(jsonResponse(issue));
  }
);

issueRouter.delete("/:id", zodParamValidator(issueIdParamSchema), async (c) => {
  const id = Number(c.req.param("id"));
  await issueService.removeIssue(id);
  return c.json(jsonResponse(null, 200, "Issue deleted successfully"));
});

export default issueRouter;
