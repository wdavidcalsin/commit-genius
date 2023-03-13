import { extendTheme, ThemeConfig } from "@chakra-ui/react";

import { fontFamily } from "./fonts";

export const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: fontFamily,
});

export default theme;
