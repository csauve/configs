const c = {
  black: "#0f111e",
  dark_gray: "#111926",
  gray: "#263e48",
  light_gray: "#666666",
  red: "#c82438",
  green_dark: "#9b1e2e",
  green: "#6bdba1",
  yellow: "#fdc198",
  blue: "#3da0bf",
  magenta: "#db86ba",
  cyan: "#62cdcd",
  white: "#bad2d6",
  transparent: "#00000000"
};

console.log(JSON.stringify({
  ...c,
  content: {
    fg: c.white,
    bg: c.black,
    faded: c.light_gray,
    good: c.green,
    bad: c.red,
    accent: c.magenta,
    accent_faded: c.light_gray,
  },
  window: {
    fg: c.white,
    bg: c.black,
    border: {
      focused: c.green_dark,
      active: c.dark_gray,
      inactive: c.dark_gray,
      indicator: c.dark_gray,
      urgent: c.red
    },
  },
  notice: {
    border: {
      focused: c.green_dark,
      active: c.black,
      inactive: c.black,
      urgent: c.red,
    },
    fg: {
      focused: c.black,
      active: c.light_gray,
      inactive: c.light_gray,
      urgent: c.black,
    },
    bg: {
      focused: c.green_dark,
      active: c.black,
      inactive: c.black,
      urgent: c.red,
    },
  },
}));
