<template>
  <v-app>
    <NavBar></NavBar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue';

  import NavBar from './components/NavBar.vue'

  export default Vue.extend({
    name: 'App',

    components: {NavBar},

    data: () => ({
      //
    }),
  });
</script>
