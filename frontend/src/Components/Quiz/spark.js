import mojs from "@mojs/core";

const randomSparks = new mojs.Burst({
  radius: { 0: 100 },
  count: 1000,
  isShowEnd: false,
  children: {
    shape: "circle",
    radius: { 8: 2 },
    fill: "#FF8C42",
    duration: 2000,
    opacity: { 1: 0 },
    delay: "stagger( rand(0, 500) )",
  },
  onComplete() {
    this.generate().replay();
  },
});

export { randomSparks };
