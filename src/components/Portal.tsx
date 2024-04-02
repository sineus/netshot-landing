"use client";

import { PropsWithChildren, useLayoutEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Portal(
  props: PropsWithChildren<{ targetSelector?: string }>
) {
  const { children, targetSelector } = props;
  const target = useRef<Element>();

  useLayoutEffect(() => {
    if (targetSelector) {
      target.current = document.querySelector(targetSelector) as Element;
    } else {
      target.current = document.body;
    }
  }, [target, targetSelector]);

  return target.current ? createPortal(children, target.current) : null;
}
