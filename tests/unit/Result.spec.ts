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
    expect(alert.exists()).toBe(true);
  });
});

describe("components/ResultList test", () => {
  it("ResultListが空ならエラーメッセージが表示されない", () => {
    const wrapper = mount(ResultList, {
      localVue,
      propsData: {
        repos: [
          {
            name: "dummy_name1",
            html_url: "dummy_url1",
            description: "dummy_description1"
          }
        ]
      }
    });
    const alert = wrapper.find("#alert_message");
    expect(alert.exists()).toBe(false);
  });
});
