import { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  components: {
    Typography: {
      lineHeight: 1.2,
      fontSize: 16,
      // fontFamily: "inherit",
    },
    Button: {
      primaryColor: "#FFFFFF",
      borderRadius: 0,
      defaultBg: "#000000",
    },
  },
  token: {
    fontFamily: "inherit",
  },
};
