import { PropsWithChildren } from "react";
import { styled } from "../../styled-system/jsx";
import type { StyledVariantProps } from "../../styled-system/types";
import Icon from "./Icon";

export const StyledButton = styled("button", {
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

type ButtonVariantProps = StyledVariantProps<typeof StyledButton>;

type ButtonProps = PropsWithChildren<
  ButtonVariantProps & {
    icon?: string;
  }
>;

export default function Button(props: ButtonProps) {
  const { children, icon, ...other } = props;
  return (
    <StyledButton {...other}>
      {children}
      {icon && <Icon name={icon} size={20} />}
    </StyledButton>
  );
}
