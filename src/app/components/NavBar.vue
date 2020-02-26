<template>
  <v-app-bar
      app
      color="blue-grey darken-2"
      dark
      elevation="1"
  >

    <v-toolbar-title>Vue shopping</v-toolbar-title>
    <v-spacer/>

    <v-menu :close-on-content-click="false" offset-y>
      <template v-slot:activator="{on}">
        <v-btn color="success" v-on="on">
          <v-badge :content="totalItem" inline>
            Checkout
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
        <v-card-text>

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
            <v-btn block color="primary" rounded>Proceed to checkout</v-btn>
          </v-card-actions>
        </v-card-text>

      </v-card>
    </v-menu>

  </v-app-bar>

</template>
<script>
  import Vue from 'vue'
  import {cartStore} from "@/app/store";

  export default Vue.extend({
    computed: {
      totalItem() {
        return cartStore.totalCartItem || 0;
      },

      carts() {
        return cartStore.items.map(cart => ({
          thumbnail: cart.product.thumbnailUrl,
          name: cart.product.name,
          description: cart.product.description,
          price: cart.product.price.toLocaleString(),
          quantity: cart.quantity,
          subtotal: (cart.quantity * cart.product.price).toLocaleString()
        }))
      }
    }
  })
</script>