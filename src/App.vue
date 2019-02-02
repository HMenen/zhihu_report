<template>
  <div id="app">
    <daily></daily>
    <router-view/>
  </div>
</template>

<script>
import Daily from './components/Daily.vue'

export default {
  name: 'App',
  components: {
    Daily
  }
}
</script>

<style>

</style>
