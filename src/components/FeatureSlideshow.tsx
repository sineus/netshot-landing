"use client";

import { styled } from "@styled-system/jsx";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

const SLIDES = [
  {
    src: "/images/netshot-feature-network-inventory.webp",
    alt: "Feature network inventory",
  },
  {
    src: "/images/netshot-feature-network-inventory.webp",
    alt: "Feature network inventory1",
  },
  {
    src: "/images/netshot-feature-network-inventory.webp",
    alt: "Feature network inventory2",
  },
  {
    src: "/images/netshot-feature-network-inventory.webp",
    alt: "Feature network inventory3",
  },
  {
    src: "/images/netshot-feature-network-inventory.webp",
    alt: "Feature network inventory4",
  },
  {
    src: "/images/netshot-feature-network-inventory.webp",
    alt: "Feature network inventory5",
  },
];

export default function FeatureSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    selector: ".slider-slide",
    loop: true,
    slides: {
      origin: "center",
      perView: 3,
      spacing: 50,
    },
    slideChanged(evt) {
      setCurrentIndex(evt.track.details.rel);
    },
  });

  return (
    <styled.div>
      <styled.div ref={sliderRef} className="slider" mb="8">
        {SLIDES.map((slide) => (
          <styled.div
            className="slider-slide"
            bg="grey.100"
            rounded="3xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            key={slide.alt}
            h="500px"
          >
            <styled.div
              w="100%"
              h="100%"
              rounded="xl"
              boxShadow="0 4px 8px 0 rgba(tokens(colors.grey.200), 0.4)"
              maxW="80%"
              maxH="80%"
              position="relative"
              overflow="hidden"
            >
              <Image src={slide.src} alt={slide.alt} fill />
            </styled.div>
          </styled.div>
        ))}
      </styled.div>
      <styled.p>{currentIndex}</styled.p>
    </styled.div>
  );
}
