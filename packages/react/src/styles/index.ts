import { createStitches, defaultThemeMap } from "@stitches/react";
import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from "@ignite-ui/tokens";

export const {
  styled,
  getCssText,
  css,
  globalCss,
  theme,
  keyframes,
  config,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: "space",
    width: "space",
  },
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    radii,
    space,
  },
});
