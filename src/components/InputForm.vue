<template>
  <v-form>
    <v-text-field
      v-model="account"
      :rules="accountRules"
      label="Github account name"
      required
    ></v-text-field>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class InputForm extends Vue {
  private account?: string = "";
  private accountRules = [() => !!this.account || "Account Name is required"];
}
</script>
