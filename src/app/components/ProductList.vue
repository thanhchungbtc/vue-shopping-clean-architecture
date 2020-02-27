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
import { ProductStore } from "@/app/store/product";
import { getModule } from "vuex-module-decorators";
import { Product } from "@/domain/entity";

export default Vue.extend({
  components: {
    Product: ProductComponent
  },

  computed: {
    productStore(): ProductStore {
      return getModule(ProductStore, this.$store);
    },

    products(): Product[] {
      return this.productStore.items;
    }
  },

  data() {
    return {
      loading: false
    };
  }
});
</script>