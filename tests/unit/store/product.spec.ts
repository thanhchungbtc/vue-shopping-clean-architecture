import { ProductStore } from "./../../../src/app/store/product";
import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { getModule } from "vuex-module-decorators";
import { container } from "@/di";
import sinon from "sinon";
import { GetAllProduct } from "@/usecases/interactor/getAllProduct";
import { injectable } from "inversify";
import { of } from "rxjs";
import { Product } from "@/domain/entity";

container.unbindAll();

@injectable()
class MockGetAllProduct implements GetAllProduct {
  execute(): import("rxjs").Observable<
    import("../../../src/domain/entity").Product[]
  > {
    throw new Error("Method not implemented.");
  }
}
container
  .bind<GetAllProduct>("GetAllProduct")
  .to(MockGetAllProduct)
  .inSingletonScope();
const mockUseCase = container.get<GetAllProduct>("GetAllProduct");

const sandbox = sinon.createSandbox();

describe("ProductStore", () => {
  describe("[Actions]", () => {
    describe("fetchAll()", () => {
      beforeEach(() => {});
      afterEach(() => {
        sandbox.restore();
      });
      it("should execute usecase: GetAllProduct", async () => {
        // setup
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store({ modules: { product: ProductStore } });
        const module = getModule(ProductStore, store);
        const spy = sandbox.stub(mockUseCase, "execute");
        spy.callsFake(() => of([]));

        // execute
        await module.fetchItems();

        // assert
        expect(spy.calledOnce).toBe(true);
      });

      it("should call mutation: setItems", async () => {
        // setup
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store({ modules: { product: ProductStore } });
        const module = getModule(ProductStore, store);
        const spy = sandbox.stub(mockUseCase, "execute");
        spy.callsFake(() => of([]));
        const mutation = sandbox.spy(module, "setItems");

        // execute
        await module.fetchItems();

        // assert
        expect(mutation.calledOnce).toBe(true);
      });
    });
  });

  describe("[Mutations]", () => {
    describe("setItems()", () => {
      beforeEach(() => {});
      afterEach(() => {
        sandbox.restore();
      });
      it("should update list item state", () => {
        // setup
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store({ modules: { product: ProductStore } });
        const module = getModule(ProductStore, store);

        // execute
        const products: Product[] = [];
        module.setItems(products);
        
        // assert
        expect(module.items).toEqual(products);
      });
    });
  });
});
