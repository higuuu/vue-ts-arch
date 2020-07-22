<template>
  <v-card class="input-form-size">
    <v-card-title>
      Githubアカウント検索
    </v-card-title>
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-form :lazy-validation="false">
            <v-text-field
              v-model="account"
              :rules="accountRules"
              label="Github account name"
              outlined
              required
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="3">
          <v-btn @click="submit(account)" color="primary">
            送信
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
import "../assets/style.css";

@Component
export default class InputForm extends Vue {
  private account?: string = "higuuu";
  private accountRules = [
    (value?: string) => !!value || "Account Name is required"
  ];
  created() {
    this.submit(this.account);
  }
  @Emit("submit") submit(account?: string) {
    return account;
  }
}
</script>
