import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld/index.vue";

describe("HelloWorld", () => {
  it("renders props.msg when passed", () => {
    const msg = "New Message";
    const wrapper = shallowMount(HelloWorld, {
      props: { msg },
    });

    expect(wrapper.text()).toMatch(msg);
  });
});
