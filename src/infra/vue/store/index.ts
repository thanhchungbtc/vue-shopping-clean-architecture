import Vue from "vue";
import Vuex from "vuex";
import {ProductState, ProductStore} from "./product";
import {CartState, CartStore} from "./cart";

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

export {ProductStore, CartStore,};
export default store;
