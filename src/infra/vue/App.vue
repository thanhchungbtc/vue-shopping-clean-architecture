<template>
  <div id="app">
    <NavBar></NavBar>
    <b-container class="mt-3">
      <router-view/>
    </b-container>
  </div>
</template>
<script lang="ts">
  import NavBar from "@/infra/vue/components/NavBar.vue";
  import Vue from 'vue'

  export default Vue.extend({
    components: {
      NavBar,
    }
  })
</script>

