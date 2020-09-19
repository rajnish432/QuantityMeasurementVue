<template>
  <div id="app">
    <QuantityMeasurementHeader />
    <QuantityMeasurmentCards v-bind:unit="unit" v-on:selectType=" updateUnit($event)" />
    <QuantityMeasurementConversion v-bind:unit="unit" />
  </div>
</template>

<script>
import QuantityMeasurementHeader from "./QuantityMeasurementHeader";
import QuantityMeasurmentCards from "./QuantityMeasurmentCards";
import QuantityMeasurementConversion from "./QuantityMeasurementConversion";

export default {
  name: "QuantityMeasurementHome",
  data() {
    return {
      unit: "",
    };
  },

  components: {
    QuantityMeasurementHeader,
    QuantityMeasurmentCards,
    QuantityMeasurementConversion,
  },
  methods: {
    updateUnit: function (updatedUnit) {
      this.unit = updatedUnit;
    },
  },
};
</script>
<style scoped>
</style>