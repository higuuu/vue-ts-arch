<template>
  <v-card class="input-form-size">
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-form>
            <v-text-field
              v-model="account"
              :rules="accountRules"
              label="Github account name"
              required
            ></v-text-field>
          </v-form>
        </v-col>
        <v-col cols="3">
          <v-btn @click="submit(account)">
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
  private account?: string = "";
  private accountRules = [() => !!this.account || "Account Name is required"];
  @Emit("submit") submit(account?: string) {
    return account;
  }
}
</script>
