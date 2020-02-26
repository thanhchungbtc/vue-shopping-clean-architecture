<template>
  <div class="home">
    <ProductList></ProductList>
  </div>
</template>

<script>
  import ProductList from "@/app/components/ProductList";
  import {productStore} from "@/app/store";

  export default {
    name: 'Home',

    components: {ProductList},

    created() {
      productStore.fetchItems()
    },

  }
</script>
