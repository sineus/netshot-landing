import Link, { type LinkProps } from "next/link";
import { PropsWithChildren } from "react";
import { styled } from "../../styled-system/jsx";
import type { StyledVariantProps } from "../../styled-system/types";

export const StyledLink = styled(Link, {
  base: {
    paddingX: "3",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color .2s ease",
    bg: "transparent",
    color: "green.1100",
    borderRadius: "lg",
    textStyle: "body",
    fontWeight: "medium",
    "&:hover": {
      bg: "green.50",
      color: "green.600",
    },
  },
});

type NavLinkVariantProps = StyledVariantProps<typeof StyledLink>;
type NavLinkProps = PropsWithChildren<NavLinkVariantProps & LinkProps>;

export default function NavLink(props: NavLinkProps) {
  const { children, ...other } = props;

  return <StyledLink {...other}>{children}</StyledLink>;
}
