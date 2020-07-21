<template>
  <v-container>
    <v-list>
      <v-list-item
        v-for="(item, i) in path"
        :key="i"
        text
        color="black"
        style="text-decoration: none; padding-left: 0px;"
      >
        <v-list-item-content>
          <v-list-item-title>{{ title[i] }}</v-list-item-title>
          <v-list-item-subtitle>{{ subtitle[i] }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ResultList extends Vue {
  @Prop() title!: string;
  @Prop() subtitle!: string;
  @Prop() path!: string;
}
</script>
