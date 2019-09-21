<template>
  <div id="app" class="app">
    <div class="shape">
      <shape
        :width="width"
        :height="width"
        :zones="zones"
        :stroke-width="strokeWidth"
        :duration="duration"
        :fill="color"
        :stroke-color="stroke"
        :should-animate="animate"
      >
      </shape>
    </div>
    <div class="controls">
      <div>
        <label for="width">width</label>
        <input type="number" name="width" id="width" v-model="width" />
      </div>
      <div>
        <label for="height">height</label>
        <input type="number" name="height" id="height" v-model="height" />
      </div>
      <div>
        <label for="strokeWidth">stroke width</label>
        <input
          type="number"
          name="strokeWidth"
          id="strokeWidth"
          v-model="strokeWidth"
        />
      </div>
      <div>
        <label for="zones">zones</label>
        <input type="number" name="zones" id="zones" v-model="zones" />
      </div>
      <div>
        <label for="duration">duration</label>
        <input type="number" name="duration" id="duration" v-model="duration" />
      </div>
      <div>
        <label for="animate">should animate</label>
        <input type="checkbox" name="animate" id="animate" v-model="animate" />
      </div>
      <div>
        <label for="color">fill color</label>
        <input type="color" name="color" id="color" v-model="color" />
      </div>
      <div>
        <label for="stroke">stroke color</label>
        <input type="color" name="stroke" id="stroke" v-model="stroke" />
      </div>
    </div>
  </div>
</template>

<script>
import Shape from "./components/Shape.vue";

export default {
  name: "app",
  components: {
    Shape
  },
  data: () => ({
    color: "#EBF3DD",
    stroke: "#009933",
    strokeWidth: 0,
    width: 400,
    height: 400,
    zones: 5,
    duration: 1,
    animate: true
  })
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.app,
.shape,
.controls {
  display: flex;
}

.shape,
.controls {
  width: 50%;
}

.shape {
  justify-content: flex-end;
}

.controls {
  flex-direction: column;
  align-items: flex-end;
}
</style>
