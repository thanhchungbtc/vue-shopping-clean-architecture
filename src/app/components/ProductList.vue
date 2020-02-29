<template>
  <div>
    <v-row>
      <v-col :key="idx" md="4" sm="6" v-for="(item ,idx) in products" xs="12">
        <Product class="my-5" :key="idx" :product="item"></Product>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts">
  import Vue from "vue";
  import ProductComponent from "@/app/components/Product.vue";
  import {ProductStore} from "@/app/store/product";
  import {getModule} from "vuex-module-decorators";
  import {Product} from "@/domain/entity";
  import {Component} from "vue-property-decorator";
  import {CartStore} from "@/app/store/cart";

  @Component({
    components: {
      Product: ProductComponent
    }
  })
  export default class ProductListComponent extends Vue {
    loading = false

    get productStore(): ProductStore {
      return getModule(ProductStore, this.$store)
    }

    get products(): Product[] {
      return this.productStore.items;
    }

  }
</script>