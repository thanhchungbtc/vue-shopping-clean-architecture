<template>
  <v-card hover outlined>
    <v-card-text>

      <v-img height="200"
             :src="product.thumbnailUrl"/>

      <p class="mt-6 mb-0 title success--text">{{ product.name }}</p>

      <p class="pink--text body-1">${{ product.price.toLocaleString() }}</p>
      <p>{{ product.description }}</p>

      <v-btn block color="success" @click="addToCart" :loading="loading">Add to cart</v-btn>

    </v-card-text>
  </v-card>
</template>
<script lang="ts">
  import Vue from 'vue'
  import {CartStore} from "@/app/store/cart";
  import {getModule} from "vuex-module-decorators";
  import {Component, Prop} from "vue-property-decorator";
  import {Product} from "@/domain/entity";


  @Component
  export default class ProductComponent extends Vue {
    @Prop({required: true}) product!: Product

    loading = false

    get cartStore(): CartStore {
      return getModule(CartStore, this.$store)
    }

    addToCart() {
      this.loading = true;
      this.cartStore.addProductToCart({product: this.product, quantity: 1})
        .finally(() => {
          this.loading = false
        })
    }
  }
</script>