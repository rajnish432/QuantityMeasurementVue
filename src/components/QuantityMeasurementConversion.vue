<template>
  <div class="card-container">
    <div>
      <div class="type">FROM</div>
      <div class="type">TO</div>
    </div>
    <div>
      <md-content>
        <md-field>
          <md-input v-model="initial1"></md-input>
        </md-field>
        <md-autocomplete v-model="selectedFirstUnit" :md-options="subUnits">
          <label>Unit One</label>
        </md-autocomplete>
      </md-content>

      <md-content>
        <md-field>
          <md-input v-model="initial1"></md-input>
        </md-field>
        <md-autocomplete v-model="selectedSecondUnit" :md-options="subUnits">
          <label>Unit Two</label>
        </md-autocomplete>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      initial1: "1",
      initial2: "1000",
      subUnits: ["Meters", "Centimeters", "Milimeter"],
      selectedFirstUnit: null,
      selectedSecondUnit: null,
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  width: 48%;
  height: 250px;
}

.card-container > div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.md-content {
  width: 42%;
  height: 113px;
  margin: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 12px 24px;
}

.md-field {
  margin: 4px;
  padding: 5px;
  min-height: initial;
}

.md-input {
  font-size: 28px !important;
  font-weight: bold;
}

.type {
  width: 100%;
  display: flex;
  text-align: start;
  font-family: system-ui;
  font-size: large;
  padding-left: 40px;
  font-weight: 600;
  opacity: 0.62;
}
</style>