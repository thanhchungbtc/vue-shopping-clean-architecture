<template>
  <div>
    <v-row>
      <v-col :key="idx" md="4" sm="6" v-for="(item ,idx) in products" xs="12">
        <ProductComponent class="my-5" :key="idx" :product="item"></ProductComponent>
      </v-col>
    </v-row>
  </div>

</template>
<script lang="ts">
  import Vue from 'vue'
  import ProductComponent from './ProductComponent.vue'
  import {Product} from "@/domain/entity";
  import {productStore} from "@/app/store";

  export default Vue.extend({
    components: {ProductComponent},

    computed: {
      products(): Product[] {
        return productStore.items
      }
    }

  })
</script>