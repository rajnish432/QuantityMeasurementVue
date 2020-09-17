<template>
  <div id="app">
    <QuantityMeasurementHeader />
    <QuantityMeasurementCards />
  </div>
</template>

<script>
import QuantityMeasurementHeader from "./components/QuantityMeasurementHeader.vue";
import QuantityMeasurementCards from "./components/QuantityMeasurmentCards.vue";

export default {
  name: "App",
  components: {
    QuantityMeasurementHeader,
    QuantityMeasurementCards,
  },
};
</script>

<style>
#app {
  font-family: system-ui;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
