<template>
  <div class="home">
    <InputForm @submit="submit" />
    <ResultList :repos="repos" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import InputForm from "@/components/InputForm.vue";
import ResultList from "@/components/ResultList.vue";
import { Component, Vue } from "vue-property-decorator";
import { vxm } from "@/store";
import { Repos } from "../store/modules/repos";

@Component({
  components: {
    ResultList,
    InputForm
  }
})
export default class Home extends Vue {
  async created() {
    await vxm.repos.getRepos("higuuu");
    this.repos = vxm.repos.allRepos;
  }
  private repos: Repos[] = vxm.repos.allRepos;
  private async submit(account: string) {
    await vxm.repos.getRepos(account);
    this.repos = vxm.repos.allRepos;
  }
}
</script>
