"use strict";

const black = "#1b2b34";
const red = "#ec5f67";
const green = "#99c794";
const yellow = "#fac863";
const blue = "#6699cc";
const magenta = "#c594c5";
const cyan = "#5fb3b3";
const white = "#a7adba";
const lightWhite = "#d8dee9";
const lightBlack = "#343d46";

exports.decorateConfig = config =>
  Object.assign({}, config, {
    cursorColor: lightWhite,
    cursorAccentColor: black,
    backgroundColor: black,
    foregroundColor: lightWhite,
    borderColor: lightBlack,
    selectionColor: "rgba(216, 222, 233,0.3)",
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite
    },
    css: `
        ${config.css || ""}
        .tab_tab:before {
            border-left: 1px solid;
        }
        .tab_active {
            color: ${yellow}
        }
    `
  });
