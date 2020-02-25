import {Product} from "@/domain/entity";
import {Observable} from "rxjs";
import {injectable, inject} from "inversify";
import ProductRepository from "@/usecases/repository/productRepository";

export interface GetAllProduct {
  execute(): Observable<Product[]>;
}

@injectable()
export class GetAllProductImpl implements GetAllProduct {
  constructor(
    @inject("ProductRepository") public productRepo: ProductRepository
  ) {
  }

  execute(): Observable<Product[]> {
    return this.productRepo.getAll();
  }
}
