import { Button, Icon, Navbar } from "@/components";
import { Container, VStack, styled } from "../../styled-system/jsx";

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
            <Button size="lg" icon="download">
              Download Netshot
            </Button>
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
            <Button icon="arrowRight">Get started</Button>
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
                  <Icon name="settings" color="green.500" size="20" />
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
                  <Icon name="server" color="green.500" size="20" />
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
                  <Icon name="box" color="green.500" size="20" />
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

          <styled.hr borderColor="grey.50" my={{ base: "80px", md: "100px" }} />

          <styled.div
            display="flex"
            flexDirection={{ base: "column", md: "row" }}
          >
            <styled.div flex="1" mb={{ base: "80px", md: "100px" }}>
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
              <Button icon="arrowRight">Get started</Button>
            </styled.div>
          </styled.div>
        </Container>
      </styled.main>
    </>
  );
}
