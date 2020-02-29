import {Observable, of} from "rxjs";
import {tap, map} from "rxjs/operators";
import {injectable} from "inversify";
import {Cart, Product} from "@/domain/entity";
import CartRepository from "@/usecases/repository/cartRepository";

@injectable()
export default class CartRepositoryImpl implements CartRepository {
  private _carts: Cart[] = [];

  public addItemToCart(product: Product, quantity: number): Observable<void> {
    this._carts.push({product, quantity});
    return of(1).pipe(
      // delay(1000),
      map(() => {
        return;
      })
    );
  }

  public getTotalCartItem(): Observable<number> {
    const val = this._carts.length;
    return of(null).pipe(
      // delay(1000),
      map(() => val)
    );
  }

  proceedCheckout(): Observable<void> {
    return of(null).pipe(
      tap(() => {
        this._carts = []
      }),
      map(() => {
        return
      })
    );
  }
}
