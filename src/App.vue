<template>
  <div id="app">
    <shape :width="400" :height="400" :zones="5"> </shape>
  </div>
</template>

<script>
import Shape from "./components/Shape.vue";

export default {
  name: "app",
  components: {
    Shape
  }
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
</style>
