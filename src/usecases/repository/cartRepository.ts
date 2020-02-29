import {Observable} from "rxjs";
import {Product} from "@/domain/entity";

export default interface CartRepository {
  addItemToCart(product: Product, quantity: number): Observable<void>;

  getTotalCartItem(): Observable<number>;

  proceedCheckout(): Observable<void>;
}
