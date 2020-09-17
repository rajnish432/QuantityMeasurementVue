<template>
  <div class="card-container">
    <div class="type">CHOOSE TYPE</div>
    <div>
      <md-card>
        <md-card-header>
          <md-card-media>
            <img class="logo" v-bind:src="require('../assets/'+scalesrc)" />
          </md-card-media>Length
        </md-card-header>
      </md-card>

      <md-card id="card2">
        <md-card-header>
          <md-card-media>
            <img class="other-logo" v-bind:src="require('../assets/'+tempsrc)" />
          </md-card-media>Temperature
        </md-card-header>
      </md-card>

      <md-card id="card3">
        <md-card-header>
          <md-card-media>
            <img class="logo other-logo" v-bind:src="require('../assets/'+volumesrc)" />
          </md-card-media>Volume
        </md-card-header>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuantityMeasurementCards",
  data() {
    return {
      scalesrc: "scalefilled.png",
      tempsrc: "hotfilled.png",
      volumesrc: "beakerfilled.png",
    };
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  width: 40%;
  height: 300px;
}

.md-card {
  border-radius: 15px;
  padding: 10px;
  margin: 10px;
  width: 173px;
  height: 137px;
  display: inline-block;
  vertical-align: top;
  font: normal normal medium 15px/19px Montserrat;
  font-weight: 600;
  text-transform: capitalize;
  opacity: 0.21;
  filter: grayscale(100%);
}

.md-card:hover {
  border: 1px solid #0ec098;
  background: #edfdf9 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  letter-spacing: 0px;
  color: #0ec098;
  text-transform: capitalize;
  opacity: 1;
  filter: grayscale(0%);
}

#card2:hover {
  background: #ffeef0 0% 0% no-repeat padding-box;
  border: 1px solid #fd5160;
  letter-spacing: 0px;
  color: #fd5160;
  text-transform: capitalize;
}

#card3:hover {
  background: #e8ddff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #7224ff;
  letter-spacing: 0px;
  color: #7224ff;
  text-transform: capitalize;
  opacity: 1;
}

.type {
  width: 100%;
  display: flex;
  text-align: start;
  font-family: system-ui;
  font-size: large;
  padding-left: 25px;
  font-weight: 600;
}

.type + div {
  padding: 10px;
}

.logo {
  height: 70px;
  width: 20px;
}

.other-logo {
  width: 42px;
}
</style>