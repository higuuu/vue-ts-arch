import { createModule, mutation, action } from "vuex-class-component";
import { getRepos } from "../../api/getRepos";

export interface Repos {
  name: string;
  html_url: string;
  description: string;
}

const VuexModule = createModule();

export default class ReposStore extends VuexModule {
  public repos: Repos[] = [];

  public get allRepos(): Repos[] {
    return this.repos;
  }

  @mutation
  private saveRepos(repos: Repos[]) {
    this.repos = repos;
  }

  @action()
  public async getRepos(user: string) {
    const { data } = await getRepos(user);
    this.saveRepos(data);
  }
}
