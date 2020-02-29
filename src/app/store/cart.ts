import {lazyInject} from "@/di";
import {Action, Module, Mutation, VuexModule} from "vuex-module-decorators";
import {Cart, Product} from "@/domain/entity";
import {AddItemToCart} from "@/usecases/interactor/addItemToCart";
import {ProceedCheckout} from "@/usecases/interactor/proceedCheckout";

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
  public items: Cart[] = [];
  @lazyInject("AddItemToCart") private addItemToCart!: AddItemToCart;
  @lazyInject("ProceedCheckout") private proceedCheckout!: ProceedCheckout;

  get totalCartItem(): number {
    return this.items.reduce((acc, cart) => acc + cart.quantity, 0);
  }

  get totalAmount(): number {
    return this.items.reduce(
      (acc, item) => acc + item.quantity * item.product.price,
      0
    );
  }

  @Mutation
  clearCart() {
    this.items = []
  }

  @Mutation
  addItem(cart: Cart) {
    const idx = this.items.findIndex(c => c.product.id === cart.product.id);
    if (idx >= 0) {
      this.items[idx].quantity += cart.quantity;
    } else {
      this.items.push(cart);
    }
  }

  @Action
  async addProductToCart({product, quantity}: AddProductToCartPayload) {
    await this.addItemToCart.execute(product, quantity).toPromise();
    this.addItem({
      product: product,
      quantity: quantity
    } as Cart);
  }

  @Action
  async checkout() {
    await this.proceedCheckout.execute().toPromise();
    this.clearCart()
  }
}
