<template>
  <div class="home">
    <ProductList></ProductList>
  </div>
</template>

<script>
  import ProductList from "./ProductList";
  import {productStore} from "@/app/store";

  export default {
    name: 'Home',

    components: {ProductList},

    created() {
      productStore.fetchItems()
    }
  }
</script>
