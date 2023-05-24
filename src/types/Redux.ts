export type Store = {
  userSession: UserSessionType;
};
export type UserSessionType = {
  user: LoginResponseType | null;
  error: string | null;
  store: Store | null;
};
export type LoginResponseType = {
  token: string;
  username: string;
};
