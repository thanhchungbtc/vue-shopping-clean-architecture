<template>
  <div>
  <v-data-table
      :items="carts"
  ></v-data-table>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {cartStore} from "@/app/store";

  export default Vue.extend({
    computed: {
      carts() {
        return cartStore.items.map(item => ({
          product: item.product.name
        }))
      }
    }
  })
</script>