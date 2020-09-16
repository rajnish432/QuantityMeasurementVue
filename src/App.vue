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
  font-family: system-ui;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
