<template>
  <div id="app">
    <QuantityMeasurementHeader />
    <QuantityMeasurementCards />
    <QuantityMeasurementConversion/>
  </div>
</template>

<script>
import QuantityMeasurementHeader from "./components/QuantityMeasurementHeader.vue";
import QuantityMeasurementCards from "./components/QuantityMeasurmentCards.vue";
import QuantityMeasurementConversion from "./components/QuantityMeasurementConversion.vue"

export default {
  name: "App",
  components: {
    QuantityMeasurementHeader,
    QuantityMeasurementCards,
    QuantityMeasurementConversion
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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
