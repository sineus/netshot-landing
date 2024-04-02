import { cva } from "@styled-system/css";

export const button = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "2",
    px: "5",
    borderRadius: "full",
    textStyle: "body",
    fontWeight: "medium",
    cursor: "pointer",
    transition: "all .2s ease",
    width: "fit-content",
  },
  variants: {
    visual: {
      primary: {
        bg: "green.600",
        color: "white",
        boxShadow: "0 2px 8px 0px rgba(25, 63, 46, 0.2)",
        "&:hover": {
          bg: "green.500",
          boxShadow: "0 4px 12px 0px rgba(25, 63, 46, 0.26)",
        },
      },
      ghost: {
        bg: "green.50",
        color: "green.600",
        "&:hover": {
          bg: "green.100",
        },
      },
      plain: {
        bg: "transparent",
        color: "green.1100",
        "&:hover": {
          bg: "green.50",
        },
      },
    },
    size: {
      sm: {
        height: "38px",
      },
      md: {
        height: "40px",
      },
      lg: {
        height: "48px",
        fontSize: "lg",
        px: "7",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "md",
  },
});
