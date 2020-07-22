<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for="(repo, i) in repos"
        :key="i"
        text
        color="black"
        style="text-decoration: none; padding-left: 0px;"
      >
        <v-list-item-content>
          <v-list-item-title>{{ repo.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ repo.description }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Repos } from "../store/modules/repos";

@Component
export default class ResultList extends Vue {
  @Prop() repos!: Repos[];
}
</script>
