import {Observable, of} from "rxjs";

import {injectable} from "inversify";
import {Product} from "@/domain/entity";

@injectable()
export default class ProductRepositoryImpl {
  private _products: Product[] = [
    {
      id: "1",
      name: "Product 1",
      price: 1000,
      thumbnailUrl: "https://www.dropbox.com/s/swg9bdr0ejcbtrl/img9.jpg?raw=1",
      description: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs..."
    },
    {
      id: "2",
      name: "Product 2",
      price: 2000,
      thumbnailUrl: "https://www.dropbox.com/s/78fot6w894stu3n/img3.jpg?raw=1",
      description: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs..."
    },
    {
      id: "3",
      name: "Product 3",
      price: 1500,
      thumbnailUrl: "https://www.dropbox.com/s/rjj1vtdx79xptu0/img6.jpeg?raw=1",
      description: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs..."
    },
    {
      id: "4",
      name: "Product 4",
      price: 2200,
      thumbnailUrl: "https://www.dropbox.com/s/miym588nx2lscqt/img7.jpg?raw=1",
      description: "3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs..."
    },
  ];

  public getAll(): Observable<Product[]> {
    return of(this._products)
  }
}
