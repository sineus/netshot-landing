import { Button, Navbar } from "@/components";
import { Container, VStack, styled } from "../../styled-system/jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <styled.header mt="80px" mb="140px">
        <Container maxW="6xl">
          <VStack gap="7" mt="80px">
            <styled.h1
              textStyle="heading"
              fontSize="8xl"
              fontWeight="500"
              lineHeight="100%"
              textAlign="center"
            >
              Your Comprehensive Network Device Management Solution
            </styled.h1>
            <styled.h4
              textStyle="heading"
              fontSize="2xl"
              fontWeight="400"
              lineHeight="150%"
              textAlign="center"
              color="grey.500"
              width="80%"
              margin="0 auto"
            >
              Streamline your network management tasks with Netshot, the
              powerful and intuitive tool designed to help you.
            </styled.h4>
            <Button size="lg" icon="download">
              Download Netshot
            </Button>
          </VStack>
          <styled.div
            mt="88px"
            width="100%"
            bg="grey.100"
            borderRadius="2xl"
            h="700px"
          ></styled.div>
        </Container>
      </styled.header>
      <styled.main>
        <Container maxW="6xl">
          <styled.div width="70%">
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
        </Container>
      </styled.main>
    </>
  );
}
