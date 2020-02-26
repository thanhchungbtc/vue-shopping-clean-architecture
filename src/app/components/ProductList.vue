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
  import Vue from 'vue'
  import ProductComponent from '@/app/components/Product.vue'
  import {productStore} from "@/app/store";

  export default Vue.extend({
    components: {
      Product: ProductComponent
    },


    computed: {
      products() {
        return productStore.items
      }
    },

    data() {
      return {
        loading: false,
      }
    },
  })
</script>