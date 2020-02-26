import {Product} from "@/domain/entity";
import {Observable, of} from "rxjs";
import {inject, injectable} from "inversify";
import ProductRepository from "@/usecases/repository/productRepository";
import {switchMap, tap} from "rxjs/operators";

export interface OutputBoundary {
  renderer(products: Product[]): void;
}

export class ProductListViewModel {
  public items: Product[] = []
  public loading = false
}

export class ProductListPresenter implements OutputBoundary {
  public viewModel = new ProductListViewModel()

  showLoading(loading: boolean): void {
    this.viewModel.loading = loading
  }

  renderer(products: Product[]): void {
    this.viewModel.items = products
  }

}


export interface GetAllProduct {
  execute(): Observable<Product[]>;
}

@injectable()
export class GetAllProductImpl implements GetAllProduct {
  presenter = new ProductListPresenter()

  constructor(
    @inject("ProductRepository") public productRepo: ProductRepository
  ) {
  }

  execute(): Observable<Product[]> {
    return of(null).pipe(
      tap(() => {
        this.presenter.showLoading(true)
      }),

      switchMap(() => this.productRepo.getAll()),

      tap((list: Product[]) => {
        this.presenter.showLoading(false)
        this.presenter.renderer(list)
      })
    )
  }
}

