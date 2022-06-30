import {Stack, Image, Heading, Text, Flex, Grid, Center, Divider} from "@chakra-ui/react";

function StatisticsCard({title, text, img, dividerLine, customMargin}) {
  const divider = dividerLine;

  return (
    <>
      <Stack
        backgroundColor="white"
        height={{lg: "320px"}}
        mt={{base: "-100px", lg: `${customMargin}`}}
        px={2}
        py={20}
        zIndex="9"
      >
        <Grid
          justifyItems={{base: "center", lg: "start"}}
          textAlign={{base: "center", lg: "left"}}
          width="320px"
        >
          <Flex
            alignItems="center"
            backgroundColor="colorViolet.100"
            borderRadius="100%"
            height="90px"
            justifyContent="center"
            mt="-120px"
            width="90px"
          >
            <Image height="50px" src={img} width="50px" />
          </Flex>
          <Heading fontSize={{base: "30px", lg: "30px"}}>{title}</Heading>
          <Text color="colorViolet.50" fontSize="17px" pt={5}>
            {text}
          </Text>
        </Grid>
      </Stack>
      {divider ? (
        <Center>
          <Divider
            borderColor="colorCyan.100"
            borderWidth="5px"
            height={{base: "200px", lg: "0px"}}
            orientation={{base: "vertical", lg: "horizontal"}}
            width={{lg: "100%"}}
            zIndex="0"
          />
        </Center>
      ) : (
        <Stack height="100px" />
      )}
    </>
  );
}

export default StatisticsCard;
