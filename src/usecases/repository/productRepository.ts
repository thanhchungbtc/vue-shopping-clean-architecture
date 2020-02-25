import {Product} from "@/domain/entity";
import {Observable} from "rxjs";

export default interface ProductRepository {
  getAll(): Observable<Product[]>;
}
