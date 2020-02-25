<template>
    <b-navbar toggleable="lg" variant="" type="light" class="border-bottom">
      <b-navbar-brand href="#">Shopping</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link tag="b-nav-item" :to="{name: 'home'}">Home</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto d-flex align-items-center">
          <b-button @click="$route.name !== 'checkout' && $router.push({name: 'checkout'})" variant="success">
            Checkout
            <b-badge>{{ totalCartItem }} items / ${{ totalAmount }}</b-badge>
          </b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
</template>
<script lang="ts">
  import Vue from 'vue'
  import {CartStore} from "@/infra/vue/store";
  import {getModule} from "vuex-module-decorators";

  export default Vue.extend({
    computed: {
      cartStore(): CartStore {
        return getModule(CartStore, this.$store);
      },

      totalCartItem(): number {
        return this.cartStore.items.length;
      },

      totalAmount(): string {
        return this.cartStore.items.reduce((acc, item) => acc + item.product.price, 0).toLocaleString()
      }

    }
  })
</script>