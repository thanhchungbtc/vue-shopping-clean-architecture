<template>
  <v-app-bar
      app
      color="blue-grey darken-2"
      dark
      elevation="1"
  >

    <v-toolbar-title>Vue shopping</v-toolbar-title>

    <div class="mr-3"></div>

    <v-btn @click="$route.name!=='Home' && $router.push({name: 'Home'})" text>Home</v-btn>
    <v-spacer/>

    <CartPreview></CartPreview>

  </v-app-bar>

</template>
<script lang="ts">
  import Vue from 'vue'
  import CartPreview from "@/app/components/CartPreview.vue";

  export default Vue.extend({
    components: {CartPreview}
  })
</script>