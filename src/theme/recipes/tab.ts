import { cva } from "@styled-system/css";

export const tab = cva({
  base: {
    h: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all .2s ease",
  },
  variants: {
    visual: {
      default: {
        borderBottom: "1px solid transparent",
        color: "grey.500",
        "&:hover": {
          color: "black",
        },
      },
      active: {
        borderBottom: "1px solid token(colors.green.500)",
        color: "black",
      },
    },
  },
  defaultVariants: {
    visual: "default",
  },
});
