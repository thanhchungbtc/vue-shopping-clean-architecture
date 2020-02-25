import {lazyInject} from '@/di';
import {Module, VuexModule, Mutation, Action} from "vuex-module-decorators";
import {Cart, Product} from '@/domain/entity';
import {AddItemToCart} from '@/usecases/interactor/addItemToCart';

export interface CartState {
  items: Cart[];
}

export interface AddProductToCartPayload {
  product: Product;
  quantity: number;
}

@Module({
  name: "cart",
  namespaced: true
})
export class CartStore extends VuexModule implements CartState {
  @lazyInject("AddItemToCart") private addItemToCart!: AddItemToCart;

  public items: Cart[] = [];

  @Mutation
  addItem(cart: Cart) {
    const idx = this.items.findIndex((c) => c.product.id === cart.product.id)
    if (idx >= 0) {
      this.items[idx].quantity += cart.quantity
    } else {
      this.items.push(cart);
    }
  }

  @Action
  addProductToCart({product, quantity}: AddProductToCartPayload) {
    this.addItemToCart
      .execute(product, quantity)
      .subscribe(
        () => {
          this.addItem({
            product: product,
            quantity: quantity
          } as Cart);
        },
        e => {
          console.log("BTC", e);
        }
      );
  }
}