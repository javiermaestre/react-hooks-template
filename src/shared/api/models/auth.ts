export interface AuthToken {
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  scope: string;
  detail: string;
  status: number;
}
