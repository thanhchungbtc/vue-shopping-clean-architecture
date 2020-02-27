import ProductComponent from "@/app/components/Product.vue";
import Vue from 'vue'

import { shallowMount, mount, createLocalVue, Wrapper } from "@vue/test-utils";
import { Product } from "@/domain/entity";

import vuetify from "vuetify";
const product: Product = {
  id: "1",
  name: "test 1",
  price: 1000,
  thumbnailUrl: ""
} as Product;

describe("Product.vue", () => {
  beforeEach(() => {});
  it("should contains product info", () => {
    Vue.use(vuetify);
    const wrapper = mount(ProductComponent, {
      propsData: {
        product
      }
    });
    expect(wrapper.text()).toContain(product.name);
  });
});
