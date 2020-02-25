<template>
  <b-row>
    <b-col xs="12" sm="6" md="4" v-for="(item, idx) in products" :key="idx">
      <Product :product="item"></Product>
    </b-col>
  </b-row>
</template>

<script lang="ts">
  import {Component, Vue,} from "vue-property-decorator";
  import {Product} from "@/domain/entity";
  import ProductComponent from "./Product.vue";
  import {getModule} from "vuex-module-decorators";
  import {ProductStore} from "@/infra/vue/store";

  @Component({
    components: {Product: ProductComponent}
  })
  export default class ProductList extends Vue {
    private get store(): ProductStore {
      return getModule(ProductStore, this.$store);
    }

    private get products(): Product[] {
      return this.store.items;
    }
  }
</script>
