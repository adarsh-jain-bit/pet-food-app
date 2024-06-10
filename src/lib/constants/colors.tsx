import { alpha } from "@mui/system";

const withAlphas = (color: { lightest?: string; light?: string; main: any; dark?: string; darkest?: string; contrastText?: string; }) => ({
  ...color,
  alpha4: alpha(color.main, 0.04),
  alpha8: alpha(color.main, 0.08),
  alpha12: alpha(color.main, 0.12),
  alpha30: alpha(color.main, 0.3),
  alpha50: alpha(color.main, 0.5),
});

export const COLORS = {
  DARK: {},
  GLOBAL: {
    BLACK: "#181818",
    WHITE: "#FFF",
    GRAY_05: "#eee",
    GRAY_10: "#e0e0e0",
    GRAY_30: "#333",
    GRAY_50: "rgba(165, 165, 165, 0.5)",
    GRAY_60: "#626262",
    PRIMARY1: "#F5333E",
    PRIMARY2: "#F41622",
  },
  LIGHT: {
    GRAY: "#707070",
    GRAY_10: "rgba(24, 24, 24, 0.06)",
    GRAY_15: "rgba(24, 24, 24, 0.1)",
    GRAY_20: "rgba(24, 24, 24, 0.13)",
    GRAY_70: "rgba(24, 24, 24, 0.7)",
  },
  NEUTRAL: {
    50: "#F8F9FA",
    100: "#F3F4F6",
    200: "#E5E7EB",
    300: "#D2D6DB",
    400: "#9DA4AE",
    500: "#6C737F",
    600: "#4D5761",
    700: "#2F3746",
    800: "#1C2536",
    900: "#111927",
  },
  PRIMARY: {
    main: "#F5333E",
    light: "#F41622",
    dark: "#2d3436",
    contrastText: "#FFFFFF",
  },
  INDIGO: withAlphas({
    lightest: "#F5F7FF",
    light: "#EBEEFE",
    main: "#6366F1",
    dark: "#4338CA",
    darkest: "#312E81",
    contrastText: "#FFFFFF",
  }),
  SUCCESS: withAlphas({
    lightest: "#F0FDF9",
    light: "#3FC79A",
    main: "#10B981",
    dark: "#0B815A",
    darkest: "#134E48",
    contrastText: "#FFFFFF",
  }),
  INFO: withAlphas({
    lightest: "#ECFDFF",
    light: "#CFF9FE",
    main: "#06AED4",
    dark: "#0E7090",
    darkest: "#164C63",
    contrastText: "#FFFFFF",
  }),
  WARNING: withAlphas({
    lightest: "#FFFAEB",
    light: "#FEF0C7",
    main: "#F79009",
    dark: "#B54708",
    darkest: "#7A2E0E",
    contrastText: "#FFFFFF",
  }),
  ERROR: withAlphas({
    lightest: "#FEF3F2",
    light: "#FEE4E2",
    main: "#F04438",
    dark: "#B42318",
    darkest: "#7A271A",
    contrastText: "#FFFFFF",
  }),
};
