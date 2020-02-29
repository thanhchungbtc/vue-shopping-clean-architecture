<template>
  <div>

    <v-card v-if="!success">
      <v-data-table
          :items="carts"
          :headers="headers"
          hide-default-footer
      >
        <template v-slot:item.thumbnailUrl="{item}">
          <v-img width="60" :src="item.thumbnailUrl"></v-img>
        </template>
        <template v-slot:item.product="{item}">
          <div class="d-flex flex-column py-3 ">
            <span class="title success--text">{{ item.product }}</span>
            <span class="subtitle-2">{{ item.description }}</span>
          </div>
        </template>
      </v-data-table>
      <v-card-actions class="pa-4">
        <v-btn @click="$router.push({name: 'Home'})">Continue shopping</v-btn>
        <v-spacer/>
        <v-btn class="px-4" color="primary" @click="checkout">Confirm</v-btn>
      </v-card-actions>
    </v-card>
    <p class="text-center" v-else>Your order has been made and will be proceeded soon.</p>
  </div>
</template>

<script lang="ts">
  import {CartStore} from "@/app/store/cart";
  import {getModule} from "vuex-module-decorators";
  import {Component, Vue} from "vue-property-decorator";


  @Component
  export default class Checkout extends Vue {

    headers = [
      {value: "thumbnailUrl", width: 50, class: "title"},
      {value: "product", text: "Product", width: 300, class: "header"},
      {value: "quantity", text: "Quantity", class: "header"},
      {value: "price", text: "Price", class: "header"},
      {value: "subtotal", text: "Subtotal", class: "header"},

    ]
    success = false

    get cartStore(): CartStore {
      return getModule(CartStore, this.$store)
    }

    get carts() {
      return this.cartStore.items.map(item => ({
        thumbnailUrl: item.product.thumbnailUrl,
        product: item.product.name,
        description: item.product.description,
        quantity: item.quantity,
        price: `$${item.product.price.toLocaleString()}`,
        subtotal: `$${(item.quantity * item.product.price).toLocaleString()}`,
      }))
    }

    async checkout() {
      await this.cartStore.checkout()
      this.success = true
    }
  }
</script>

<style>
  .header {
    font-size: 0.9em !important;
  }
</style>