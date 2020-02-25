import {lazyInject} from "@/di";

import {Module, VuexModule, Mutation, Action} from "vuex-module-decorators";
import {Product} from "@/domain/entity";
import {GetAllProduct} from "@/usecases/interactor/getAllProduct";

export interface ProductState {
  items: Product[];
}

@Module({
  name: "product",
  namespaced: true
})
export class ProductStore extends VuexModule implements ProductState {
  public items: Product[] = [];

  @lazyInject("GetAllProduct") private getAllProduct!: GetAllProduct;

  @Mutation
  setItems(items: Product[]) {
    this.items = items;
  }

  @Action
  fetchItems() {
    this.getAllProduct.execute().subscribe(list => {
      this.setItems(list);
    });
  }
}
