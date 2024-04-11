"use client";

import { Container, styled } from "@styled-system/jsx";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Tab, Tabs } from "./tabs";

const SLIDES = [
  {
    src: "/images/netshot-feature-network-inventory.webp",
    alt: "Feature network inventory",
    title: "Network inventory",
    description:
      "Netshot builds an inventory of IP and MAC addresses, serial numbers, and part numbers of hardware modules for efficient network device management and asset tracking.",
  },
  {
    src: "/images/netshot-feature-extensibility.webp",
    alt: "Feature extensibility",
    title: "Extensibility",
    description:
      "Support of new devices can be very easily added by writing driver script files. The REST API can be used to extend Netshot.",
  },
  {
    src: "/images/netshot-feature-change.webp",
    alt: "Feature change",
    title: "Change automation",
    description:
      "Push changes to your network devices using Netshot for efficient and consistent updates across your infrastructure.",
  },
  {
    src: "/images/netshot-feature-authentication.webp",
    alt: "Feature network authentication",
    title: "User authentication",
    description:
      "Netshot allows users to be authenticated locally or centrally through RADIUS, providing greater security and convenience for managing access.",
  },
];

export default function FeatureSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    selector: ".slider-slide",
    loop: true,
    breakpoints: {
      "(min-width: 500px)": {
        slides: {
          origin: "center",
          perView: 3,
          spacing: 50,
        },
      },
    },
    slideChanged(evt) {
      setCurrentIndex(evt.track.details.rel);
    },
  });

  const select = useCallback(
    (index: number) => {
      instanceRef.current?.moveToIdx(index);
    },
    [instanceRef]
  );

  return (
    <styled.div>
      <styled.div ref={sliderRef} className="slider" mb="8">
        {SLIDES.map((slide) => (
          <styled.div
            className="slider-slide"
            bg="grey.100"
            rounded={{ base: "0", md: "3xl" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            key={slide.alt}
            h={{ base: "300px", md: "500px" }}
          >
            <styled.div
              w="100%"
              h="auto"
              rounded="xl"
              boxShadow="0 4px 8px 0 rgba(tokens(colors.grey.200), 0.4)"
              maxW="80%"
              position="relative"
              overflow="hidden"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </styled.div>
          </styled.div>
        ))}
      </styled.div>
      <Container maxW="6xl">
        <styled.div
          display="flex"
          flexDirection="column"
          gap="12"
          w={{ base: "100%", md: "calc(100%/12*8)" }}
          mx="auto"
        >
          <Tabs>
            {SLIDES.map((slide, index) => (
              <Tab
                visual={currentIndex === index ? "active" : "default"}
                onClick={() => select(index)}
                key={slide.title}
              >
                <styled.p fontSize="lg" fontWeight="medium">
                  {slide.title}
                </styled.p>
              </Tab>
            ))}
          </Tabs>
          <styled.div>
            <styled.p fontSize="md" color="grey.500" textAlign="center">
              {SLIDES[currentIndex]?.description}
            </styled.p>
          </styled.div>
        </styled.div>
      </Container>
    </styled.div>
  );
}
