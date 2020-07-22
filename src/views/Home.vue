<template>
  <div class="home">
    <InputForm />
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
}
</script>
