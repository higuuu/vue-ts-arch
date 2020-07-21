<template>
  <v-container>
    <v-list-item
      text
      color="black"
      :to="path"
      style="text-decoration: none; padding-left: 0px;"
    >
      <v-list-item-content>
        <v-list-item-title>
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ subtitle }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
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
