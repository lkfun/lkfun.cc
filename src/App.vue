<template>
  <div id="app">
    <f-header></f-header>
    <router-view/>
    <f-footer></f-footer>
  </div>
</template>

<script>
import FHeader from './components/Header.vue'
import FFooter from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    FHeader,
    FFooter
  }
}
</script>

<style>
</style>
