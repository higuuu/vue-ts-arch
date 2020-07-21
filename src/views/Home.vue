<template>
  <div class="home">
    <ResultList :path="['url']" :title="['title']" :subtitle="['sub']" />
  </div>
</template>

<script>
// @ is an alias to /src
import ResultList from "@/components/ResultList.vue";

export default {
  name: "Home",
  components: {
    ResultList
  }
};
</script>
