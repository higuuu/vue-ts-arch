import Vue from "vue";
import Vuex from "vuex";
import reposStore from "./modules/repos";
import { createProxy, extractVuexModule } from "vuex-class-component";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ...extractVuexModule(reposStore)
  },
  strict: false
});

export interface VXM {
  repos: reposStore;
}

export const vxm: VXM = {
  repos: createProxy(store, reposStore)
};

export default store;
