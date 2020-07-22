<template>
  <div class="home">
    <ResultList :path="['url']" :title="['title']" :subtitle="['sub']" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import ResultList from "@/components/ResultList.vue";
import { Component, Vue } from "vue-property-decorator";
import { vxm } from "@/store";

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
  }
}
</script>
