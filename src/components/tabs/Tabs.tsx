import { styled } from "@styled-system/jsx";
import { PropsWithChildren } from "react";

export default function Tabs(props: PropsWithChildren) {
  const { children } = props;

  return (
    <styled.div
      display="flex"
      gap="42px"
      position="relative"
      mx="auto"
      overflow="auto"
      w="100%"
    >
      {children}
      <styled.div
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        h="1px"
        bg="grey.50"
        zIndex="-1"
      ></styled.div>
    </styled.div>
  );
}
