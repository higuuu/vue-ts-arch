import { mount, createLocalVue } from "@vue/test-utils";
import Vuetify from "vuetify";
import ResultList from "@/components/ResultList.vue";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("components/ResultList test", () => {
  it("ResultListが空ならエラーメッセージが表示される", () => {
    const wrapper = mount(ResultList, {
      localVue,
      propsData: {
        repos: []
      }
    });
    const alert = wrapper.find("#alert_message");
    expect(alert.isVisible()).toBe(true);
  });
});
