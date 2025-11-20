export interface APIResponse<T> {
  status: string;
  message: string;
  data: T;
  timestamp: string;
}

export function jsonResponse<T>(
  data: T,
  status: number = 200,
  message: string = "Success"
): APIResponse<T> {
  return {
    status: status.toString(),
    message,
    data,
    timestamp: new Date().toISOString(),
  };
}
