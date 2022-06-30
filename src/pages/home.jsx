import {Stack, Heading, Text, Image, Link, Grid, Flex} from "@chakra-ui/react";

import illustrationWorking from "../images/illustration-working.svg";
function Home() {
  return (
    <Flex
      flexDirection={{base: "column", lg: "row-reverse"}}
      id="home"
      pl={{lg: "50px"}}
      pt={{base: "100px", lg: "150px"}}
    >
      <Stack mb={10} overflowX="hidden">
        <Image height="350px" ml="70px" src={illustrationWorking} width="900px" />
      </Stack>
      <Grid
        justifyItems={{base: "center", lg: "left"}}
        px={{base: "5", lg: "0"}}
        textAlign={{base: "center", lg: "left"}}
      >
        <Heading
          color="colorBlue.50"
          fontWeight="700"
          letterSpacing="-2px"
          size={{base: "3xl", lg: "4xl"}}
        >
          More than just shorter links
        </Heading>
        <Text color="colorViolet.50" fontWeight="500" py={{base: "5", lg: "0"}}>
          Build your brand{"’"}s recognition and get detailed insights on how your links are
          performing.
        </Text>
        <Stack>
          <Link
            backgroundColor="colorCyan.50"
            borderRadius="50px"
            color="white"
            my={2}
            py={4}
            textAlign="center"
            width="190px"
          >
            Get Started
          </Link>
        </Stack>
      </Grid>
    </Flex>
  );
}

export default Home;
