import { prisma } from "../config/db.ts";
import type {
  Issue,
  IssueCreateInput,
  IssueUpdateInput,
  IssueId,
  IssueQueryOptions,
} from "../types/issues.js";

export const getIssuesCount = (
  options: IssueQueryOptions = {}
): Promise<number> => {
  const { search, status } = options;
  const where: any = {};
  if (search) {
    where.OR = [
      { title: { contains: search } },
      { description: { contains: search } },
    ];
  }
  if (status) {
    where.status = status;
  }
  return prisma.issue.count({ where });
};

export const getAllIssues = (
  options: IssueQueryOptions = {}
): Promise<Issue[]> => {
  const { search, status, skip, take } = options;
  const where: any = {};
  if (search) {
    where.OR = [
      { title: { contains: search } },
      { description: { contains: search } },
    ];
  }
  if (status) {
    where.status = status;
  }
  return prisma.issue.findMany({
    where,
    skip,
    take,
    orderBy: { id: "desc" },
  });
};

export const getIssueById = (id: IssueId): Promise<Issue | null> =>
  prisma.issue.findUnique({ where: { id } });

export const createIssue = (data: IssueCreateInput): Promise<Issue> =>
  prisma.issue.create({ data });

export const updateIssue = (
  id: IssueId,
  data: IssueUpdateInput
): Promise<Issue> => prisma.issue.update({ where: { id }, data });

export const deleteIssue = (id: IssueId): Promise<Issue> =>
  prisma.issue.delete({ where: { id } });
