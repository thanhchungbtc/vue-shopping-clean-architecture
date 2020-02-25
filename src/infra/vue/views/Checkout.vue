<template>
  <div class="d-flex flex-column">

    <b-table
        :items="carts"
        :fields="fields"
    >
      <template v-slot:cell(thumbnail)="{item}">
        <b-img :src="item.thumbnail" width="70" height="70"></b-img>
      </template>
      <template v-slot:cell(name)="{item}">
        <h5 class="text-success">{{ item.name }}</h5>
        <p>{{ item.description }}</p>
      </template>
      <template v-slot:cell(product)="data">
        <span v-text="data.item.product.name"></span>
      </template>
      <template v-slot:cell(price)="{item}">
        <span>${{ item.price.toLocaleString() }}</span>
      </template>
      <template v-slot:cell(subtotal)="{item}">
        <span>${{ item.subtotal.toLocaleString() }}</span>
      </template>
    </b-table>
    <b-button class="my-3" variant="info">Checkout</b-button>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from "vue-property-decorator";
  import {CartStore} from "@/infra/vue/store";
  import {getModule} from "vuex-module-decorators";

  @Component
  export default class CheckoutComponent extends Vue {
    get cartStore(): CartStore {
      return getModule(CartStore, this.$store);
    }

    get fields() {
      return [
        {key: 'thumbnail', label: '', thStyle: 'width: 50px'},
        {key: 'name', thStyle: 'width: 100px'},
        {key: 'price', thStyle: 'width: 100px'},
        {key: 'quantity', thStyle: 'width: 100px'},
        {key: 'subtotal', thStyle: 'width: 100px'},
      ]
    }

    get carts() {
      return this.cartStore.items.map(cart => ({
        thumbnail: cart.product.thumbnailUrl,
        name: cart.product.name,
        description: cart.product.description,
        price: cart.product.price,
        quantity: cart.quantity,
        subtotal: cart.quantity * cart.product.price
      }))
    }


  }
</script>