<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    stroke-width="25"
    stroke-linejoin="round"
    :height="height"
    :width="width"
    :viewBox="viewBox"
  >
    <path
      ref="figure"
      :d="path"
      :fill="fill"
      :stroke="strokeColor"
      :stroke-width="strokeWidth"
    ></path>
  </svg>
</template>

<script>
import SvgGenerator from "../helpers/SvgGenerator";
import { TweenMax, Linear, AttrPlugin } from "gsap";

/* eslint-disable-next-line */
const plugins = [AttrPlugin];

export default {
  name: "shape",
  props: {
    height: { type: Number, required: true },
    width: { type: Number, required: true },
    zones: { type: Number, default: 5 },
    fill: { type: String, default: "#EBF3FF" },
    strokeColor: { type: String, default: "#EBF3FF" },
    strokeWidth: { type: Number, default: 0 },
    shouldAnimate: { type: Boolean, default: true },
    duration: { type: Number, default: 1 }
  },
  data: () => ({
    generator: null,
    path: "",
    animation: 0,
    tween: null
  }),
  computed: {
    viewBox() {
      return `0 0 ${200} ${100}`;
    }
  },
  watch: {
    shouldAnimate() {
      if (this.shouldAnimate) {
        this.init();
      } else {
        this.clear();
      }
    }
  },
  created() {
    this.init();
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    init() {
      this.generator = new SvgGenerator();
      this.path = this.generator.get(this.zones);

      if (this.shouldAnimate) {
        this.play();
      }
    },
    clear() {
      this.generator = null;

      if (this.shouldAnimate) {
        this.stop();
        this.tween.kill();
        this.tween = null;
      }
    },
    animate() {
      this.tween = new TweenMax(this.$refs.figure, this.duration, {
        attr: { d: this.generator.get(this.zones) },
        ease: Linear.easeNone
      });
    },
    play() {
      this.animation = setInterval(this.animate, this.duration * 1000);
    },
    stop() {
      clearInterval(this.animation);
    }
  }
};
</script>
