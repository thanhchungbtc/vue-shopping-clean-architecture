import { of } from "rxjs";
import { expect } from "chai";
import { container } from "./setup";
import ProductRepository from "@/usecases/repository/productRepository";
import { GetAllProduct } from "@/usecases/interactor/getAllProduct";
import sinon from "sinon";
import { Product } from "@/domain/entity";

describe("getAllProduct", () => {
  let repo: ProductRepository;
  let usecase: GetAllProduct;

  beforeEach(() => {
    repo = container.get<ProductRepository>("ProductRepository");
    usecase = container.get<GetAllProduct>("GetAllProduct");
  });

  afterEach(function() {
    (repo.getAll as sinon.SinonStub).restore();
  });

  it("should call ProductRepository.getAll", () => {
    const stub = sinon.stub(repo, "getAll");
    usecase.execute();
    expect(stub).to.have.been.called;
  });

  it("should return list of products", () => {
    const stub = sinon.stub(repo, "getAll");
    const products: Product[] = [
      { id: "1", name: "Test 1", price: 1000 },
      { id: "2", name: "Test 2", price: 2000 }
    ];
    stub.callsFake(() => {
      return of(products);
    });

    const res = usecase.execute();
    res.subscribe(list => {
      expect(list).to.deep.equal(products);
    });
  });
});
