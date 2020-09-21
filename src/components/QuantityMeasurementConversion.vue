<template>
  <div class="conversion-container">
    <div>
      <div class="type">FROM</div>
      <div class="type to-padding">TO</div>
    </div>
    <div>
      <md-content>
        <md-field>
          <md-input @input="updateSecondValue()" v-model="initial1"></md-input>
        </md-field>
        <select
          name="firstUnit"
          class="units"
          @change="updateFirstValue()"
          v-model="selectedFirstUnit"
        >
          <option v-for="subunit in subUnits" v-bind:key="subunit">{{subunit}}</option>
        </select>
      </md-content>

      <md-content>
        <md-field>
          <md-input @input="updateFirstValue()" v-model="initial2"></md-input>
        </md-field>
        <select
          @change="updateSecondValue()"
          name="secondUnit"
          class="units"
          v-model="selectedSecondUnit"
        >
          <option v-for="subunit in subUnits" v-bind:key="subunit">{{subunit}}</option>
        </select>
      </md-content>
    </div>
  </div>
</template>

<script>
import services from "../services/QuantityMeasurementService";
import { eventBus } from "../main";

export default {
  name: "QuantityMeasurementConversion",
  data() {
    return {
      initial1: "0",
      initial2: "0",
      subUnits: [],
      selectedFirstUnit: "",
      selectedSecondUnit: "",
      unit: "",
    };
  },
  methods: {
    updateSubUnit: function () {
      services.getSubUnits(this.unit).then((response) => {
        this.subUnits = response.data;
      });
    },
    updateFirstValue: function () {
      services
        .getConvertedValues(
          this.initial2,
          this.unit,
          this.selectedSecondUnit,
          this.selectedFirstUnit
        )
        .then((response) => {
          this.initial1 = response.data.convertedValue;
        });
    },

    updateSecondValue: function () {
      services
        .getConvertedValues(
          this.initial1,
          this.unit,
          this.selectedFirstUnit,
          this.selectedSecondUnit
        )
        .then((response) => {
          this.initial2 = response.data.convertedValue;
        });
    },
  },

  created() {
    eventBus.$on("selectType", (selectedType) => {
      this.unit = selectedType;
      this.updateSubUnit();
    });
  },
};
</script>

<style scoped>
.conversion-container {
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  width: 48%;
  height: 250px;
}

.conversion-container > div {
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
}

.md-field {
  padding: 5px;
  height: 50%;
  min-height: initial;
  width: 100%;
  min-height: 50%;
  padding-top: 16px;
  border: 1px solid #e7dcfe;
  display: flex;
  position: initial;
  margin: 0px;
  font-family: inherit;
}

.md-input {
  font-size: 28px !important;
  width: 40px;
  font-weight: bold;
}

.type {
  width: 100%;
  display: flex;
  text-align: start;
  font-family: system-ui;
  font-size: large;
  padding-left: 10px;
  font-weight: 600;
  opacity: 0.62;
}

.to-padding {
  padding-left: 55px;
}

.units {
  height: 150px;
  font-weight: 700;
  padding: 5px;
  border: 1px solid #e7dcfe;
}

@media screen and (max-width: 479px) {
  .conversion-container {
    height: 153px;
    width: 90%;
  }
}
</style>