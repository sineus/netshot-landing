import { iconButton } from "@/theme/recipes";
import { HTMLStyledProps, styled } from "@styled-system/jsx";
import type { StyledVariantProps } from "@styled-system/types";
import Icon from "./Icon";

export const StyledIconButton = styled("button", iconButton);

type IconButtonVariantProps = StyledVariantProps<typeof StyledIconButton>;

type IconButtonProps = IconButtonVariantProps & {
  icon: string;
} & HTMLStyledProps<"button">;

export default function IconButton(props: IconButtonProps) {
  const { icon, ...other } = props;
  return (
    <StyledIconButton {...other}>
      <Icon name={icon} size={20} />
    </StyledIconButton>
  );
}
