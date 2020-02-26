import Vue from "vue";
import Vuex from "vuex";
import {ProductState, ProductStore} from "./product";
import {CartState, CartStore} from "./cart";
import {getModule} from "vuex-module-decorators";

Vue.use(Vuex);

export interface RootState {
  product: ProductState;
  cart: CartState;
}

const store = new Vuex.Store<RootState>({
  modules: {
    product: ProductStore,
    cart: CartStore
  }
});

const productStore = getModule(ProductStore, store)
const cartStore = getModule(CartStore, store)
export {productStore, cartStore}
export default store;
