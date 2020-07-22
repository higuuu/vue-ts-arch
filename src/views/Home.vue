<template>
  <div class="home">
    <ResultList :repos="repos" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import ResultList from "@/components/ResultList.vue";
import { Component, Vue } from "vue-property-decorator";
import { vxm } from "@/store";
import { Repos } from "../store/modules/repos";

@Component({
  components: {
    ResultList
  }
})
export default class Home extends Vue {
  async created() {
    console.log(0);
    await vxm.repos.getRepos("higuuu");
    console.log(1);
    console.log("home", vxm.repos.allRepos);
    this.repos = vxm.repos.allRepos;
  }
  private repos: Repos[] = vxm.repos.allRepos;
}
</script>
