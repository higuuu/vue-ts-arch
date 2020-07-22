import {
  createModule,
  Module,
  mutation,
  action,
  getter
} from "vuex-class-component";
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
    console.log(this.repos);
  }

  @action()
  public async getRepos(user: string) {
    const { data } = await getRepos(user);
    this.saveRepos(data);
    console.log(this.repos);
    console.log(this.allRepos);
  }
}
