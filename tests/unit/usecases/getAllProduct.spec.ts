import {of} from "rxjs";
import {expect} from "chai";
import {container} from "./setup";
import ProductRepository from "@/usecases/repository/productRepository";
import {GetAllProduct} from "@/usecases/interactor/getAllProduct";
import sinon from "sinon";
import {Product} from "@/domain/entity";

describe("getAllProduct", () => {
  let repo: ProductRepository;
  let usecase: GetAllProduct;

  beforeEach(() => {
    repo = container.get<ProductRepository>("ProductRepository");
    usecase = container.get<GetAllProduct>("GetAllProduct");
  });

  afterEach(function () {
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
      {
        id: "1",
        name: "Product 1",
        price: 1000,
        thumbnailUrl: "https://www.dropbox.com/s/swg9bdr0ejcbtrl/img9.jpg?raw=1",
        description: "Description 1"
      },
      {
        id: "2",
        name: "Product 2",
        price: 2000,
        thumbnailUrl: "https://www.dropbox.com/s/78fot6w894stu3n/img3.jpg?raw=1",
        description: "Description 1"
      },
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
