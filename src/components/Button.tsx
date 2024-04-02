import { button } from "@/theme/recipes";
import { styled } from "@styled-system/jsx";
import type { StyledVariantProps } from "@styled-system/types";
import { PropsWithChildren } from "react";
import Icon from "./Icon";

export const StyledButton = styled("button", button);

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
