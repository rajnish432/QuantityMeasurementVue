<template>
  <div class="header">
    <md-toolbar class="firstheader" md-elevation="0">
      <h2 class="md-title">Quanment</h2>
      <button>
        <h4>History</h4>
      </button>
    </md-toolbar>
    <md-toolbar class="firstheader md-primary">
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
  flex-direction: column;
  width: 100%;
}

.md-primary {
  width: 100%;
  height: 75px;
}

.firstheader {
  display: flex;
  justify-content: space-around;
}

.md-title {
  font-weight: 600 !important;
}

button {
  background-color: transparent;
  border: none;
}
</style>
