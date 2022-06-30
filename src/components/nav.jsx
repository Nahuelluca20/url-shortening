import {
  Flex,
  Link,
  Image,
  Center,
  Fade,
  useDisclosure,
  Stack,
  Grid,
  Divider,
} from "@chakra-ui/react";

import Logo from "../images/logo.svg";

function Nav() {
  const {isOpen, onToggle} = useDisclosure();

  return (
    <Flex
      alignContent="center"
      backgroundColor="white"
      justifyContent={{base: "space-between"}}
      left="0"
      position="fixed"
      px={{base: "5", lg: "50px"}}
      py={5}
      right="0"
      zIndex="10"
    >
      <Center display={{lg: "flex"}}>
        <Link href="#home">
          <Image src={Logo} width="100px" />
        </Link>
        <Center display={{base: "none", lg: "flex"}} ml={5}>
          <Link
            _hover={{color: "colorViolet.200"}}
            color="colorViolet.50"
            fontWeight="700"
            href="#features"
            mx={2}
          >
            Features
          </Link>
          <Link
            _hover={{color: "colorViolet.200"}}
            color="colorViolet.50"
            fontWeight="700"
            href="#pricing"
            mx={2}
          >
            Pricing
          </Link>
          <Link
            _hover={{color: "colorViolet.200"}}
            color="colorViolet.50"
            fontWeight="700"
            href="#resources"
            mx={2}
          >
            Resources
          </Link>
        </Center>
      </Center>
      <Link display={{lg: "none"}} onClick={onToggle}>
        <Image src="https://img.icons8.com/material-rounded/96/000000/menu--v1.png" width="30px" />
      </Link>

      <Stack
        display={{base: "block", lg: "none"}}
        left="0"
        mx={4}
        position="absolute"
        right="0"
        textAlign="center"
        top="20"
      >
        {isOpen ? (
          <Fade in={isOpen}>
            <Grid bg="colorViolet.100" color="white" mt="4" p="40px" rounded="md" shadow="md">
              <Link
                color="white"
                fontWeight="700"
                href="#features"
                mx={2}
                my={3}
                onClick={onToggle}
              >
                Features
              </Link>
              <Link color="white" fontWeight="700" href="#pricing" mx={2} my={3} onClick={onToggle}>
                Pricing
              </Link>
              <Link
                color="white"
                fontWeight="700"
                href="#resources"
                mx={2}
                my={3}
                onClick={onToggle}
              >
                Resources
              </Link>
              <Divider borderWidth="-1px" my={6} />
              <Link color="white" fontWeight="700" mb={5} mx={2}>
                Login
              </Link>
              <Link
                backgroundColor="colorCyan.50"
                color="white"
                fontWeight="700"
                mx={2}
                px={5}
                py={3}
                rounded="3xl"
              >
                Resources
              </Link>
            </Grid>
          </Fade>
        ) : (
          <div />
        )}
      </Stack>

      <Center display={{base: "none", lg: "flex"}}>
        <Link _hover={{color: "colorViolet.200"}} color="colorViolet.50" fontWeight="700" mx={2}>
          Login
        </Link>
        <Link
          backgroundColor="colorCyan.50"
          color="white"
          fontWeight="700"
          mx={2}
          px={5}
          py={3}
          rounded="3xl"
        >
          Resources
        </Link>
      </Center>
    </Flex>
  );
}

export default Nav;
