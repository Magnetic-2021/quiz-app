import mojs from "@mojs/core";

const checkPath =
  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M5 13l4 4L19 7"/>';

class Check extends mojs.CustomShape {
  getShape() {
    return checkPath;
  }
}

mojs.addShape("check", Check);

const checkAnimation = new mojs.Shape({
  shape: "check",
  stroke: "lightseagreen",
  fill: "none",
  duration: 600,
  strokeDasharray: "100%",
  strokeDashoffset: { "100%": "0" },
  scale: 2,
  easing: "ease.in",
  x: 70,
  y: 380,
}).then({
  duration: 200,
  opacity: { 1: 0 },
  stroke: "red",
});

const checkBurst = new mojs.Burst({
  x: 0,
  y: 300,
  children: {
    fill: "lightseagreen",
    duration: 500,

    delay: 250,
    scale: 0.5,
    opacity: { 1: 0, easing: "ease.out" },
  },
});

const correctAnimation = new mojs.Timeline({});
correctAnimation.add(checkAnimation, checkBurst);

export { checkAnimation, checkBurst, correctAnimation };
