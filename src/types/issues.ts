export type IssueCreateInput = {
  title: string;
  description?: string;
  status?: string;
};

export type IssueUpdateInput = {
  title?: string;
  description?: string;
  status?: string;
};

export type IssueId = number;

export type Issue = {
  id: number;
  title: string;
  description?: string | null;
  status: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface IssueQueryOptions {
  search?: string;
  status?: string;
  skip?: number;
  take?: number;
}
