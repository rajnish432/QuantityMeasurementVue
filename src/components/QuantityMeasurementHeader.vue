<template>
  <div class="header">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Welcome To Quantity Measurement</h3>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: "QuantityMeasurementHeader",
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  width: 100%;
}
.md-toolbar.md-theme-default.md-primary {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
</style>
