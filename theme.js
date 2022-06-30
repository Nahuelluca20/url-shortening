import {extendTheme} from "@chakra-ui/react";

export default extendTheme({
  colors: {
    colorGray: {
      50: "#F0F1F6",
      100: "#BFBFBF",
    },
    colorViolet: {
      50: "#9E9AA7",
      100: "#3B3054",
      200: "#232127",
    },
    colorBlue: {
      50: "#35323E",
    },
    colorRed: {
      50: "#F46262",
    },
    colorCyan: {
      50: "#2ACFCF",
      100: "#2BD0D0",
    },
  },
  fonts: {
    body: `"Poppins", sans-serif`,
  },
  styles: {
    global: {
      body: {
        fontSize: "18px",
        fontFamily: "Poppins",
      },
    },
  },
});
