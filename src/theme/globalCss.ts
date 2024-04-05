import { defineGlobalStyles } from "@pandacss/dev";

export const globalCss = defineGlobalStyles({
  "html, body": {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
  },
  ".slider": {
    alignContent: "flex-start",
    display: "flex",
    overflow: "hidden",
    position: "relative",
    webkitUserSelect: "none",
    webkitTouchCallout: "none",
    khtmlUserSelect: "none",
    userSelect: "none",
    msTouchAction: "pan-y",
    touchAction: "pan-y",
    webkitTapHighlightColor: "transparent",
    width: "100%",

    ".slider-slide": {
      position: "relative",
      overflow: "hidden",
      width: "100%",
      minHeight: "100%",
    },
  },
});
