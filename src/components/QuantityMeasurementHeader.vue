<template>
  <div class="header">
    <md-toolbar class="md-primary">
      <h3 class="md-title">Welcome To Quantity Measurement</h3>
    </md-toolbar>
  </div>
</template>

<script>
export default {
  name: 'QuantityMeasurementHeader',
  data(){
    return{
      message:'Welcome to QuantityMeasurement'
    }
  }
}
</script>

<style scoped>
  .header{
    display: flex;
    align-items: center;
  }
  .md-toolbar.md-theme-default.md-primary{
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
</style>
