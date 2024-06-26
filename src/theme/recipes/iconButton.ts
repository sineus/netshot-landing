import { cva } from "@styled-system/css";

export const iconButton = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    cursor: "pointer",
    transition: "all .2s ease",
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
      outline: {
        bg: "white",
        border: "1px solid token(colors.grey.100)",
        "&:hover": {
          bg: "grey.50",
        },
      },
      ghost: {
        bg: "green.50",
        color: "green.600",
        "&:hover": {
          bg: "green.100",
        },
      },
    },
    size: {
      sm: {
        width: "38px",
        height: "38px",
      },
      md: {
        width: "40px",
        height: "40px",
      },
      lg: {
        width: "48px",
        height: "48px",
      },
    },
  },
  defaultVariants: {
    visual: "primary",
    size: "md",
  },
});
