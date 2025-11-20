import * as repo from "../repositories/issueRepo.ts";
import type {
  Issue,
  IssueCreateInput,
  IssueUpdateInput,
  IssueId,
  IssueQueryOptions,
} from "../types/issues.ts";

export const getIssuesCount = (options?: IssueQueryOptions): Promise<number> =>
  repo.getIssuesCount(options);

export const fetchIssues = (options?: IssueQueryOptions): Promise<Issue[]> =>
  repo.getAllIssues(options);

export const fetchIssueById = (id: IssueId): Promise<Issue | null> =>
  repo.getIssueById(id);

export const addIssue = (data: IssueCreateInput): Promise<Issue> =>
  repo.createIssue(data);

export const editIssue = (
  id: IssueId,
  data: IssueUpdateInput
): Promise<Issue> => repo.updateIssue(id, data);

export const removeIssue = (id: IssueId): Promise<Issue> =>
  repo.deleteIssue(id);
