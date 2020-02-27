import ProductComponent from '@/app/components/Product.vue';
import ProductList from "@/app/components/ProductList.vue";
import Vue from "vue";
import Vuex from "vuex";
import * as _ from "lodash";

import { shallowMount, mount, createLocalVue, Wrapper } from "@vue/test-utils";
import { Product } from "@/domain/entity";

import vuetify from "vuetify";
import { CartStore } from "@/app/store/cart";
import { getModule } from "vuex-module-decorators";
import { ProductStore } from "@/app/store/product";
const products: Product[] = [
  {
    id: "1",
    name: "test 1",
    price: 1000,
    thumbnailUrl: ""
  },
  {
    id: "1",
    name: "test 1",
    price: 1000,
    thumbnailUrl: ""
  }
];

describe("ProductList.vue", () => {
  let productStore: ProductStore;
  beforeEach(() => {});
  it("should render Product.vue", async () => {
    Vue.use(vuetify);
    Vue.use(Vuex);
    const store = new Vuex.Store({
      modules: { product: _.cloneDeep(ProductStore) }
    });
    productStore = getModule(ProductStore, store);
    productStore.setItems(products);

    // execute
    const wrapper = mount(ProductList, {
      store
    });

    await Vue.nextTick();
    // assert
    console.log(wrapper.findAll('Product'))
    expect(wrapper.findAll(ProductComponent).length).toEqual(products.length);
  });
});
