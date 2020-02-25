import "@/di";
import { Observable, of } from "rxjs";
import sinonChai from "sinon-chai";
import chai from "chai";
chai.use(sinonChai);

import {
  GetAllProduct,
  GetAllProductImpl
} from "../../../src/usecases/interactor/getAllProduct";
import { Container, injectable } from "inversify";
import ProductRepository from "@/usecases/repository/productRepository";
import { Product } from "@/domain/entity";

const container = new Container();

@injectable()
class Mock implements ProductRepository {
  getAll(): Observable<Product[]> {
    return of([]);
  }
}
container
  .bind<ProductRepository>("ProductRepository")
  .to(Mock)
  .inSingletonScope();

container
  .bind<GetAllProduct>("GetAllProduct")
  .to(GetAllProductImpl)
  .inSingletonScope();

export { container };
