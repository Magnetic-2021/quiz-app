import mojs from "@mojs/core";

const checkPath =
  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M5 13l4 4L19 7"/>';
const crossPath =
  '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />';
class Check extends mojs.CustomShape {
  getShape() {
    return checkPath;
  }
}
class Cross extends mojs.CustomShape {
  getShape() {
    return crossPath;
  }
}

mojs.addShape("check", Check);
mojs.addShape("cross", Cross);

const correctAnimation = ({ x, y }) => {
  const checkAnimation = new mojs.Shape({
    shape: "check",
    stroke: "#1D7874",
    fill: "none",
    duration: 600,
    strokeDasharray: "100%",
    strokeDashoffset: { "100%": "0" },
    scale: 2,
    easing: "ease.in",
    isShowEnd: false,
  })
    .then({
      duration: 200,
      opacity: { 1: 0 },
      stroke: "red",
    })
    .tune({ x: x + 70, y: y + 80 });

  const checkBurst = new mojs.Burst({
    children: {
      fill: "#1D7874",
      duration: 500,
      isShowEnd: false,
      delay: 250,
      scale: 0.5,
      opacity: { 1: 0, easing: "ease.out" },
    },
  }).tune({ x, y });

  const result = new mojs.Timeline({});
  result.add(checkAnimation, checkBurst);
  return result;
};
const wrongAnimation = ({ x, y }) => {
  const crossAnimation = new mojs.Shape({
    shape: "cross",
    stroke: "#BF211E",
    fill: "none",
    duration: 600,
    strokeDasharray: "100%",
    strokeDashoffset: { "100%": "0" },
    scale: 2,
    easing: "ease.in",
    isShowEnd: false,
  })
    .then({
      duration: 200,
      opacity: { 1: 0 },
      stroke: "red",
    })
    .tune({ x: x + 70, y: y + 80 });

  const checkBurst = new mojs.Burst({
    children: {
      fill: "#BF211E",
      duration: 500,
      isShowEnd: false,
      delay: 250,
      scale: 0.5,
      opacity: { 1: 0, easing: "ease.out" },
    },
  }).tune({ x, y });

  const result = new mojs.Timeline({});
  result.add(crossAnimation, checkBurst);
  return result;
};
export { correctAnimation, wrongAnimation };
