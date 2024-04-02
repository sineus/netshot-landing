import { PropsWithChildren } from "react";
import { styled } from "../../styled-system/jsx";
import { button } from "../../styled-system/recipes";
import type { StyledVariantProps } from "../../styled-system/types";

import Link, { LinkProps } from "next/link";
import Icon from "./Icon";

export const StyledButtonLink = styled(Link, button);

type ButtonLinkVariantProps = StyledVariantProps<typeof StyledButtonLink>;

type ButtonLinkProps = PropsWithChildren<
  ButtonLinkVariantProps &
    LinkProps & {
      icon?: string;
    }
>;

export default function ButtonLink(props: ButtonLinkProps) {
  const { children, icon, ...other } = props;
  return (
    <StyledButtonLink {...other}>
      {children}
      {icon && <Icon name={icon} size={20} />}
    </StyledButtonLink>
  );
}