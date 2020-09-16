<template>
  <div id="app">
    <QuantityMeasurementHeader/>
  </div>
</template>

<script>
import QuantityMeasurementHeader from './components/QuantityMeasurementHeader.vue'

export default {
  name: 'App',
  components: {
    QuantityMeasurementHeader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
