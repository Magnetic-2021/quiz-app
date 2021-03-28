import mojs from "@mojs/core";

const COLORS = {
  white: "white",
  red: "#BF211E",
  yellow: "#E9CE2C",
  jet: "#363537",
};

// HELPERS
const _getWindowSize = () => {
  const w = window;
  return Math.max(w.innerHeight, w.innerWidth);
};
const _calcScale = (radius) => {
  return 1.4 * (_getWindowSize() / radius / 2);
};

const circleSize = 200,
  scale = _calcScale;

const options = {
  radius: circleSize,
  fill: "white",
  scale: { 0.05: 0.2 },
  duration: 500,
  easing: "cubic.out",
  isShowEnd: false,
  isForce3d: true,
  zIndex: 20,
};

const circle1 = new mojs.Shape(options)
  .then({
    easing: "cubic.inout",
    scale: 0.125,
    duration: 100,
  })
  .then({
    easing: "cubic.inout",
    scale: 0.5,
    duration: 265,
  });

const circle2 = new mojs.Shape({
  ...options,
  fill: COLORS.yellow,
  scale: { 0: 0.1125 },
  duration: 407,
  delay: 380,
}).then({
  easing: "cubic.inout",
  scale: scale,
  duration: 150,
});

// const circle3 = new mojs.Shape({
//   ...options,
//   fill: COLORS.white,
//   scale: {0:2},
//   duration: 380,
//   delay: 200,
//   // isShowStart:  true,
//   // isShowEnd:    true
// }).then({
//   scale:2,
//   duration: 600,
// });
const circle4 = new mojs.Shape({
  ...options,
  fill: COLORS.red,
  scale: { 0: 3 },
  duration: 580,
  delay: 700,
  // isShowStart:  true,
  // isShowEnd:    true
});
const circle5 = new mojs.Shape({
  ...options,
  fill: COLORS.yellow,
  scale: { 0: 3 },
  duration: 580,
  delay: 900,
  // isShowStart:  true,
  // isShowEnd:    true
}).then({
  scale: 0,
  duration: 100,
});

circle1.el.style.zIndex = 20;
circle2.el.style.zIndex = 20;
// circle3.el.style.zIndex = 20;
circle4.el.style.zIndex = 20;
circle5.el.style.zIndex = 20;

const explode = (x, y) => {
  circle1.tune({ x: x, y: y });
  circle2.tune({ x: x, y: y });
  // circ20;
  circle4.tune({ x: x, y: y });
  circle5.tune({ x: x, y: y });

  const timeline = new mojs.Timeline();
  timeline.add(circle1, circle2, circle5, circle4);
  timeline.setSpeed(1);

  timeline.play();
};

export default explode;
