import { tab } from "@/theme/recipes";
import { styled } from "@styled-system/jsx";
import type { StyledVariantProps } from "@styled-system/types";
import { PropsWithChildren } from "react";

const StyledTab = styled("button", tab);

type TabVariantProps = StyledVariantProps<typeof StyledTab>;

type TabProps = PropsWithChildren<TabVariantProps>;

export default function Tab(props: TabProps) {
  const { children, ...other } = props;

  return <StyledTab {...other}>{children}</StyledTab>;
}
