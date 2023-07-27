import { MantineThemeOverride } from "@mantine/core";
import localFont from "next/font/local";

const nexa = localFont({
  src: "../assets/fonts/Nexa-ExtraLight.ttf",
});

const MainTheme: MantineThemeOverride = {
  globalStyles: (theme) => ({
    body: {
      backgroundColor: "#f5f5f5",
    },
    colorScheme: "light",

    fontFamily: nexa.style.fontFamily,
  }),
};

export default MainTheme;
