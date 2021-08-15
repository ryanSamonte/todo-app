import "../src/css/tailwind/tailwind-build.css";
import "../src/css/tailwind/components.css";
import { star, starO } from "svelte-awesome/icons";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}