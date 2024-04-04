import {
  Alcatel,
  BrandDoodle,
  ButtonLink,
  Cisco,
  Fortinet,
  Icon,
  Juniper,
  Navbar,
} from "@/components";
import { links } from "@/constants";
import { Container, VStack, styled } from "@styled-system/jsx";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <styled.header
        mt={{ base: "40px", md: "80px" }}
        mb={{ base: "100px", md: "140px" }}
      >
        <Container maxW="6xl">
          <VStack gap="7">
            <styled.h1
              textStyle="heading"
              fontSize={{ base: "5xl", md: "6xl", lg: "8xl" }}
              fontWeight="500"
              lineHeight="100%"
              textAlign="center"
            >
              Your Comprehensive Network Device Management Solution
            </styled.h1>
            <styled.h4
              textStyle="heading"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="400"
              lineHeight="150%"
              textAlign="center"
              color="grey.500"
              w="80%"
              m="0 auto"
            >
              Streamline your network management tasks with Netshot, the
              powerful and intuitive tool designed to help you.
            </styled.h4>

            <ButtonLink
              size="lg"
              icon="download"
              href={links.download}
              target="_blank"
            >
              Download Netshot
            </ButtonLink>
          </VStack>
          <styled.div
            mt={{ base: "60px", md: "80px" }}
            w="100%"
            bg="grey.100"
            borderRadius="2xl"
            h={{ base: "300px", md: "700px" }}
          ></styled.div>
        </Container>
      </styled.header>
      <styled.main>
        <Container maxW="6xl">
          <styled.div w={{ md: "70%" }} mb={{ base: "80px", md: "100px" }}>
            <styled.h6 fontWeight="semibold" color="green.500" mb="3">
              Device Compliance
            </styled.h6>
            <styled.h3
              fontSize="3xl"
              fontWeight="semibold"
              lineHeight="110%"
              mb="6"
            >
              Maintaining IT infrastructure compliance involves the following
              elements
            </styled.h3>

            <styled.p mb="6">
              To guarantee IT infrastructure adherence to industry standards,
              define your preferred software versions and implement a consistent
              strategy. Deviating devices will be identified and rectified
              accordingly. Establish hardware End of Sale/Life cycles and
              initiate replacement plans. Set up policies and procedures that
              promote configuration best practices or tailor configurations to
              suit your organization's unique requirements.
            </styled.p>

            <ButtonLink
              icon="arrowRight"
              href={links.documentation}
              target="_blank"
            >
              Get started
            </ButtonLink>
          </styled.div>
          <styled.div
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            <VStack
              alignItems="start"
              gap="6"
              w={{ md: "calc(100%/12*5)" }}
              mb={{ base: "60px", md: "0" }}
            >
              <VStack alignItems="start" gap="2">
                <styled.div
                  w="36px"
                  h="36px"
                  bg="green.50"
                  borderRadius="7"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon name="settings" color="green.500" size={20} />
                </styled.div>
                <styled.h6 fontWeight="semibold">
                  Configuration Compliance
                </styled.h6>
                <styled.p color="grey.500">
                  Enforce policies and rules that promote configuration best
                  practices or organization-specific standards.
                </styled.p>
              </VStack>
              <VStack alignItems="start" gap="2">
                <styled.div
                  w="36px"
                  h="36px"
                  bg="green.50"
                  borderRadius="7"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon name="server" color="green.500" size={20} />
                </styled.div>
                <styled.h6 fontWeight="semibold">Hardware Compliance</styled.h6>
                <styled.p color="grey.500">
                  Establish End of Sale/Life dates for hardware, planning for
                  necessary renewals.
                </styled.p>
              </VStack>
              <VStack alignItems="start" gap="2">
                <styled.div
                  w="36px"
                  h="36px"
                  bg="green.50"
                  borderRadius="7"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon name="box" color="green.500" size={20} />
                </styled.div>
                <styled.h6 fontWeight="semibold">Software Compliance</styled.h6>
                <styled.p color="grey.500">
                  Define preferred software versions and adhere to a strategic
                  approach. Devices not conforming to standard versions will be
                  flagged promptly.
                </styled.p>
              </VStack>
            </VStack>
            <VStack
              alignItems="start"
              gap="6"
              ml={{ md: "calc(100%/12*1)" }}
              w={{ md: "calc(100%/12*6)" }}
            >
              <styled.div
                w="100%"
                bg="grey.100"
                borderRadius="2xl"
                h={{ base: "320px", md: "400px" }}
              ></styled.div>
            </VStack>
          </styled.div>

          <styled.hr borderColor="grey.50" my={{ base: "80px", md: "120px" }} />

          <styled.div
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
            mb={{ base: "80px", md: "120px" }}
          >
            <styled.div flex="1" mb={{ base: "50px", md: 0 }}>
              <styled.h6 fontWeight="semibold" color="green.500" mb="3">
                Backup & History
              </styled.h6>
              <styled.h3
                fontSize="3xl"
                fontWeight="semibold"
                lineHeight="110%"
                mb="6"
              >
                Configuration backup & history
              </styled.h3>

              <styled.p mb="6">
                Netshot meticulously archives the configuration histories of
                network devices, ensuring a comprehensive record of any
                modifications. By keeping a vigilant watch over your entire
                network, NetShot enables IT administrators to promptly identify
                and address configuration changes anywhere within their
                environment.
              </styled.p>
              <ButtonLink
                icon="arrowRight"
                href={links.documentation}
                target="_blank"
              >
                Get started
              </ButtonLink>
            </styled.div>
            <styled.div
              position="relative"
              flex={{ base: "auto", md: 1 }}
              h={{ base: 300, md: "auto" }}
            >
              <Image
                src="/images/netshot-backup.svg"
                alt="Netshot backup & history illustration"
                fill
              />
            </styled.div>
          </styled.div>
        </Container>
        <styled.div
          bg="green.1100"
          py={{ base: "80px", md: "120px" }}
          mb={{ base: "100px", md: "120px" }}
        >
          <Container
            maxW="6xl"
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            <styled.div flex="1" mb={{ base: "60px", md: 0 }}>
              <styled.h3
                fontSize="3xl"
                fontWeight="semibold"
                lineHeight="110%"
                mb="6"
                color="white"
              >
                Many devices supported
              </styled.h3>

              <styled.p mb="6" color="white">
                Netshot is compatible with the most famous network devices
                (Cisco, Juniper, Alcatel Lucent, Fortinet, etc.) out of the box.
              </styled.p>
              <ButtonLink
                icon="arrowRight"
                href={links.devices}
                target="_blank"
              >
                See supported equipment
              </ButtonLink>
            </styled.div>
            <styled.div
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              gap="5"
              flex="1"
            >
              <styled.div
                bg="rgba(236, 249, 243, 0.1)"
                borderRadius="2xl"
                h="160px"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Cisco />
              </styled.div>
              <styled.div
                bg="rgba(236, 249, 243, 0.1)"
                borderRadius="2xl"
                h="160px"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Juniper />
              </styled.div>
              <styled.div
                bg="rgba(236, 249, 243, 0.1)"
                borderRadius="2xl"
                h="160px"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Alcatel />
              </styled.div>
              <styled.div
                bg="rgba(236, 249, 243, 0.1)"
                borderRadius="2xl"
                h="160px"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Fortinet />
              </styled.div>
            </styled.div>
          </Container>
        </styled.div>
        <Container maxW="6xl" mb="60px">
          <styled.div
            display="flex"
            flexDirection="column"
            w={{ base: "100%", md: "calc(100%/12*6)" }}
          >
            <styled.h6 fontWeight="semibold" color="green.500" mb="3">
              Additional features
            </styled.h6>
            <styled.h3
              fontSize="3xl"
              fontWeight="semibold"
              lineHeight="110%"
              mb="6"
            >
              Are you asking for more?
            </styled.h3>

            <styled.p mb="6">
              By offering these features, Netshot enables organizations to
              maintain control over their networks, extend functionality as
              needed, automate change management processes, ensure robust user
              authentication, and manage assets efficiently, all while utilizing
              a cost-effective solution.
            </styled.p>
            <ButtonLink
              icon="arrowRight"
              href={links.documentation}
              target="_blank"
            >
              Learn more about Netshot
            </ButtonLink>
          </styled.div>
        </Container>
        <styled.div>Slideshow</styled.div>
        <Container
          maxW="6xl"
          p={{ base: 0 }}
          mb={{ base: "80px", md: "120px" }}
        >
          <styled.div
            w={{ base: "100%", md: "calc(100%/12*10)" }}
            ml={{ base: 0, md: "calc(100%/12*1)" }}
          >
            <styled.div
              w="100%"
              borderRadius={{ base: 0, md: "3xl" }}
              bg="green.1100"
              position="relative"
              display="flex"
              flexDirection={{ base: "column", md: "row" }}
              gap="6"
              overflow="hidden"
            >
              <styled.div
                display="flex"
                flexDirection="column"
                alignItems={{ base: "center", md: "start" }}
                pt="80px"
                pb={{ base: 0, md: "80px" }}
                px={{ base: 0, md: "60px" }}
              >
                <styled.h2
                  fontSize={{ base: "4xl", md: "6xl" }}
                  fontWeight="medium"
                  lineHeight="110%"
                  mb="6"
                  color="white"
                >
                  Orchestrate
                  <br />
                  made<styled.span color="green.500"> easy</styled.span>.
                </styled.h2>
                <styled.p
                  mb="6"
                  color="white"
                  fontSize={{ base: "md", md: "lg" }}
                  textAlign={{ base: "center", md: "start" }}
                >
                  Fast, free, and flexible network management solution.
                </styled.p>
                <ButtonLink
                  icon="arrowRight"
                  href={links.download}
                  target="_blank"
                  size="lg"
                >
                  Get started
                </ButtonLink>
              </styled.div>
              <styled.div
                flex={{ base: "auto", md: "1" }}
                position="relative"
                h="100%"
              >
                <BrandDoodle w="auto" h="100%" />
              </styled.div>
            </styled.div>
          </styled.div>
        </Container>
        <Container maxW="6xl">
          <styled.footer></styled.footer>
        </Container>
      </styled.main>
    </>
  );
}
