import request from "./baseRequest";
import { Repos } from "../store/modules/repos";

export const getRepos = (user: string) => {
  return request<never, Repos[]>("get", `users/${user}/repos`);
};
