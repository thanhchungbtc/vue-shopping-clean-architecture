import {Observable} from "rxjs";
import {inject, injectable} from "inversify";
import CartRepository from "@/usecases/repository/cartRepository";

export interface GetTotalCartItem {
  execute(): Observable<number>;
}

@injectable()
export class GetTotalCartItemImpl implements GetTotalCartItem {
  constructor(
    @inject("CartRepository") private cartRepository: CartRepository
  ) {
  }

  execute(): Observable<number> {
    return this.cartRepository.getTotalCartItem()
  }
}
