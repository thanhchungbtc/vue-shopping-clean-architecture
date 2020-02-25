<template>
  <b-card class="my-2">
    <!--    <b-card-img src="https://www.dropbox.com/s/6tqcep7rk29l59e/img2.jpeg?raw=1">-->
    <b-card-img :src="product.thumbnailUrl || 'https://www.dropbox.com/s/6tqcep7rk29l59e/img2.jpeg?raw=1'">

    </b-card-img>
    <div class="d-flex flex-column">
      <h5 class=" text-success" v-text="product.name"></h5>
      <span class="text-danger mb-2">￥{{ product.price.toLocaleString() }}</span>
      <span class="mb-4" v-text="product.description"></span>
      <b-button variant="success" block @click="addToCart">Add to cart</b-button>
    </div>
  </b-card>
</template>

<script lang="ts">
  import {Vue, Component, Prop} from "vue-property-decorator";
  import {Product} from "@/domain/entity";
  import {getModule} from "vuex-module-decorators";
  import {CartStore} from "@/infra/vue/store";
  import {AddProductToCartPayload} from "@/infra/vue/store/cart";

  @Component({
    name: "product"
  })
  export default class ProductComponent extends Vue {
    @Prop() readonly product!: Product;

    private get store(): CartStore {
      return getModule(CartStore, this.$store);
    }

    addToCart() {
      this.store.addProductToCart({
        product: this.product,
        quantity: 1
      } as AddProductToCartPayload);
      this.$bvToast.toast(`Item ${this.product.name} has been added`, {
        title: 'Cart',
        autoHideDelay: 5000,
        toaster: 'b-toaster-bottom-right'

      })
    }
  }
</script>

