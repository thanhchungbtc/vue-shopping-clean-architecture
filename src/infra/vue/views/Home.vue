<template>
  <div class="home">
    <ProductList :products="products"></ProductList>
  </div>
</template>

<script lang="ts">
  import ProductList from "@/infra/vue/components/ProductList.vue";
  import {Component, Vue} from "vue-property-decorator";
  import {Product} from "@/domain/entity";
  import {getModule} from "vuex-module-decorators";
  import {ProductStore} from "@/infra/vue/store";

  @Component<HomeComponent>({
    components: {
      ProductList
    }
  })
  export default class HomeComponent extends Vue {
    private get store(): ProductStore {
      return getModule(ProductStore, this.$store);
    }

    created() {
      this.store.fetchItems();
    }

    get products(): Product[] {
      return this.store.items
    }
  }
</script>
