<template>
  <v-menu offset-y>
    <template v-slot:activator="{on}">
      <v-btn color="success" v-on="on">
        Checkout
        <v-badge v-if="totalItem > 0" :content="totalItem" inline>
        </v-badge>

      </v-btn>
    </template>
    <v-card width="400">
      <v-list>
        <v-list-item>

          <v-list-item-content>
            <v-list-item-title class="headline font-weight-bold">Cart</v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-card-text v-if="carts.length > 0">

        <v-list>

          <v-list-item v-for="(item, idx) in carts" :key="idx">
            <v-list-item-avatar>
              <img :src="item.thumbnail">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.quantity }} item{{ item.quantity > 1 ? 's' : '' }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon small>
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>


        </v-list>

        <v-card-actions>
          <v-btn block color="primary" rounded @click="$route.name !== 'Checkout' && $router.push({name: 'Checkout'})">
            Proceed to checkout
          </v-btn>
        </v-card-actions>
      </v-card-text>

      <v-card-text v-else>
        <p>No item</p>
      </v-card-text>

    </v-card>
  </v-menu>

</template>
<script lang="ts">
  import Vue from 'vue'
  import {getModule} from "vuex-module-decorators";
  import {CartStore} from "@/app/store/cart";
  import {Component} from "vue-property-decorator";


  @Component
  export default class CartPreview extends Vue {
    get cartStore(): CartStore {
      return getModule(CartStore, this.$store)
    }

    get totalItem() {
      return this.cartStore.totalCartItem || 0;
    }

    get carts() {
      return this.cartStore.items.map(cart => ({
        thumbnail: cart.product.thumbnailUrl,
        name: cart.product.name,
        description: cart.product.description,
        price: cart.product.price.toLocaleString(),
        quantity: cart.quantity,
        subtotal: (cart.quantity * cart.product.price).toLocaleString()
      }))
    }

  }

</script>