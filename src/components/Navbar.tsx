"use client";

import { Brand, Button, IconButton, NavLink } from "@/components";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { Container, HStack, styled } from "../../styled-system/jsx";

const StyledMotionDiv = styled(motion.div);
const StyledLink = styled(Link);
const BottomSheetNavLink = styled(Link, {
  base: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    h: "44px",
    px: "4",
    transition: "all .2s ease",
    borderRadius: "lg",
    "&:active": {
      bg: "grey.50",
    },
    fontWeight: "medium",
  },
});

function MenuBottomSheet() {
  const [open, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <>
      <IconButton
        visual="outline"
        icon="menu"
        display={{ base: "flex", md: "none" }}
        onClick={toggle}
      />
      {createPortal(
        <AnimatePresence>
          {open && (
            <StyledMotionDiv
              bg="rgba(36, 41, 47, 0.4)"
              backdropFilter="blur(10px)"
              position="fixed"
              top="0"
              left="0"
              right="0"
              bottom="0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggle}
            >
              <StyledMotionDiv
                bg="white"
                position="absolute"
                bottom="0"
                borderTopLeftRadius="3xl"
                borderTopRightRadius="3xl"
                width="100%"
                initial={{ transform: "translate3d(0, 100%, 0)" }}
                animate={{ transform: "translate3d(0, 0, 0)" }}
                exit={{ transform: "translate3d(0, 100%, 0)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <styled.div
                  width="20%"
                  height="4px"
                  bg="grey.100"
                  borderRadius="full"
                  position="absolute"
                  top="12px"
                  left="0"
                  right="0"
                  margin="0 auto"
                ></styled.div>
                <styled.div
                  display="flex"
                  flexDirection="column"
                  gap="4"
                  px="3"
                  pt="8"
                  pb="5"
                >
                  <styled.nav>
                    <BottomSheetNavLink href="/">Features</BottomSheetNavLink>
                    <BottomSheetNavLink href="/">
                      Documentation
                    </BottomSheetNavLink>
                    <BottomSheetNavLink href="/">Blog</BottomSheetNavLink>
                    <BottomSheetNavLink href="/">Support</BottomSheetNavLink>
                  </styled.nav>
                  <styled.div display="flex" flexDirection="column" gap="3">
                    <Button visual="ghost">Source code</Button>
                    <Button>Download</Button>
                  </styled.div>
                </styled.div>
              </StyledMotionDiv>
            </StyledMotionDiv>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}

export default function Navbar() {
  return (
    <styled.nav
      width="100%"
      position="sticky"
      top="0"
      height="72px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderBottom="1px solid token(colors.grey.50)"
      backdropFilter="blur(20px)"
      bg="rgba(token(colors.white) .8)"
    >
      <Container
        width="100%"
        maxWidth="6xl"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack gap="8">
          <Link href="/">
            <Brand />
          </Link>
          <HStack gap="2" display={{ base: "none", md: "flex" }}>
            <NavLink href="/">Features</NavLink>
            <NavLink href="/">Documentation</NavLink>
            <NavLink href="/">Blog</NavLink>
            <NavLink href="/">Support</NavLink>
          </HStack>
        </HStack>

        <HStack gap="2">
          <Button visual="ghost" display={{ base: "none", md: "flex" }}>
            Source code
          </Button>
          <Button>Download</Button>
          <MenuBottomSheet />
        </HStack>
      </Container>
    </styled.nav>
  );
}
