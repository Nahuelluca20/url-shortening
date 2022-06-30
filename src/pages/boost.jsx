import {Stack, Heading, Link, Grid} from "@chakra-ui/react";

import bgBoostMobile from "../images/bg-boost-mobile.svg";
import bgBoostDesktop from "../images/bg-boost-desktop.svg";

function Boost() {
  return (
    <Grid
      backgroundColor="colorViolet.100"
      backgroundImage={{base: `${bgBoostMobile}`, lg: `${bgBoostDesktop}`}}
      backgroundPosition={{lg: "-400px -5px"}}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      id="pricing"
      justifyItems="center"
      px={5}
      py="100px"
      textAlign="center"
    >
      <Heading as="h4" color="white" size={{base: "xl", lg: "2xl"}}>
        Boost you links today
      </Heading>
      <Stack>
        <Link
          backgroundColor="colorCyan.50"
          borderRadius="50px"
          color="white"
          mt={5}
          py={4}
          width="190px"
        >
          Get Started
        </Link>
      </Stack>
    </Grid>
  );
}

export default Boost;
