<template>
  <v-card class="result-list-size">
    <v-card-title>
      リポジトリ一覧
    </v-card-title>
    <v-card-subtitle>
      クリックするとgithubに遷移します
    </v-card-subtitle>
    <v-list>
      <v-list-item-group>
        <v-list-item
          v-for="(repo, i) in repos"
          :key="i"
          :href="repo.html_url"
          text
          color="black"
          style="text-decoration: none; padding-left: 0px;"
        >
          <v-list-item-content>
            <v-list-item-title>{{ repo.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ repo.description }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Repos } from "../store/modules/repos";
import "../assets/style.css";

@Component
export default class ResultList extends Vue {
  @Prop() repos!: Repos[];
}
</script>
