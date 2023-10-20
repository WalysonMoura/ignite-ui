import { themes } from "@storybook/theming";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    viewport: {
      viewports: newViewports, // newViewports would be an ViewportMap. (see below for examples)
      defaultViewport: 'someDefault',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;
