import {Observable} from "rxjs";
import {inject, injectable} from "inversify";
import CartRepository from "@/usecases/repository/cartRepository";

export interface ProceedCheckout {
  execute(): Observable<void>;
}

@injectable()
export class ProceedCheckoutImpl implements ProceedCheckout {
  constructor(
    @inject("CartRepository") private cartRepository: CartRepository
  ) {
  }

  execute(): Observable<void> {
    return this.cartRepository.proceedCheckout();
  }
}
