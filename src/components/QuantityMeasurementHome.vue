<template>
  <div id="app">
    <QuantityMeasurementHeader />
    <QuantityMeasurmentCards />
    <QuantityMeasurementConversion />
  </div>
</template>

<script>
import QuantityMeasurementHeader from "./QuantityMeasurementHeader";
import QuantityMeasurmentCards from "./QuantityMeasurmentCards";
import QuantityMeasurementConversion from "./QuantityMeasurementConversion";

export default {
  name: "QuantityMeasurementHome",
  components: {
    QuantityMeasurementHeader,
    QuantityMeasurmentCards,
    QuantityMeasurementConversion,
  },
};
</script>
<style scoped>
</style>>