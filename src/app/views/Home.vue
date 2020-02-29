<template>
  <div class="home">
    <ProductList></ProductList>
  </div>
</template>

<script lang="ts">
  import ProductList from "@/app/components/ProductList.vue" ;
  import {ProductStore} from "@/app/store/product";
  import {getModule} from "vuex-module-decorators";
  import {Component, Vue} from "vue-property-decorator";

  @Component({
    components: {ProductList}
  })
  export default class Home extends Vue {
    get productStore(): ProductStore {
      return getModule(ProductStore, this.$store)
    }

    created() {
      this.productStore.fetchItems()
    }
  }
</script>
